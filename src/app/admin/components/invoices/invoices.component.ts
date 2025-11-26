import { Component } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { InvoiceStorageService } from '../../../core/services/invoice-storage.service';
import { Invoice } from '../../../core/models/invoice.model';

@Component({
  selector: 'invoices',
  standalone: false,
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
})
export class InvoicesComponent {
  constructor(
    private invoiceDialogService: NbDialogService,
    private NbTostr: NbToastrService,
    private invoiceStorageService: InvoiceStorageService
  ) { }

  ngOnInit(): void {
    this.invoices = this.invoiceStorageService.getInvoices();
    console.table(this.invoices);
    // this.NbTostr.danger('Please add Products first before adding invoices', 'Products not found');
  }

  invoices: Invoice[] = [];

  generateUniqueId(): number {
    let newId: number;
    do {
      newId = Math.floor(1000 + Math.random() * 9000);
    } while (this.invoices.some((invoice) => invoice.invoiceId === newId));
    return newId;
  }

  openAddInvoiceDialog() {
    console.log('opening add invoice dialog...');
    const invoiceDialog = this.invoiceDialogService.open(AddInvoiceComponent, {
      context: {
        isEdit: false, //when dialog opens context send false value to input
      },
    });
    invoiceDialog.onClose.subscribe((invoice) => {
      if (
        invoice &&
        invoice.customerName &&
        invoice.phoneNo &&
        invoice.InvoiceDate &&
        invoice.Address &&
        invoice.items &&  
        invoice.statusUpdate
      ) {
        invoice.invoiceId = this.generateUniqueId();
        this.invoices.push(invoice);
        this.invoiceStorageService.setInvoices(this.invoices);
        this.NbTostr.success('invoice added successfully', `SUCCESS`);
      }
      console.log('Dialog closed', invoice);
    });
  }

  editInvoiceDialog(i: number) {
    console.log('opening edit invoice Dialog....');
    const invoiceToEdit = {
      ...this.invoices[i],
      items: this.invoices[i].items.map((item) => ({ ...item })),
      InvoiceDate: new Date(this.invoices[i].InvoiceDate),
    };
    console.log(invoiceToEdit);

    const invoiceDialog = this.invoiceDialogService.open(AddInvoiceComponent, {
      context: {
        isEdit: true,
        editInvoice: invoiceToEdit,
      },
    });
    invoiceDialog.onClose.subscribe((updatedInvoice) => {
      if (
        updatedInvoice &&
        updatedInvoice.invoiceId &&
        updatedInvoice.customerName &&
        updatedInvoice.phoneNo &&
        updatedInvoice.InvoiceDate &&
        updatedInvoice.Address &&
        updatedInvoice.items &&
        updatedInvoice.statusUpdate
      ) {
        this.invoices[i] = updatedInvoice;
        this.invoiceStorageService.setInvoices(this.invoices);
        this.NbTostr.success('Invoice updated successfully', 'SUCCESS');
      }
    });
  }

  deleteInvoice(i: number) {
    this.invoices.splice(i, 1);
    this.invoiceStorageService.setInvoices(this.invoices);
    this.NbTostr.danger('Invoice deleted successfully', 'SUCCESS');
  }

  refresh() {
    window.location.reload();
  }
}
