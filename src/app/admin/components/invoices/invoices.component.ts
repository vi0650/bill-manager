import { Component } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
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
    private NbTostr: NbToastrService
  ) { }

  ngOnInit(): void {
    this.getInvoiceData();
  }

  invoices: Invoice[] = [];

  getInvoiceData() {
    const storedInvoice = localStorage.getItem('Invoices');
    if (storedInvoice) {
      this.invoices = JSON.parse(storedInvoice);
    } else {
      this.invoices;
      this.setInvoiceData();
    }
  }

  setInvoiceData() {
    localStorage.setItem('Invoices', JSON.stringify(this.invoices));
  }

  openAddInvoiceDialog() {
    console.log('opening dialog...');
    const invoiceDialog = this.invoiceDialogService.open(AddInvoiceComponent, {
      context: {
        isEdit: false,
      },
    });
    invoiceDialog.onClose.subscribe((invoice) => {
      if (
        invoice &&
        invoice.invoiceId &&
        invoice.customerName &&
        invoice.phoneNo &&
        invoice.InvoiceDate &&
        invoice.Address &&
        invoice.items &&
        invoice.statusUpdate
      ) {
        this.invoices.push(invoice);
        this.setInvoiceData();
        this.NbTostr.success('invoice added successfully', `SUCCESS`);
      }
      console.log('Dialog closed', invoice);
    });
  }

  editInvoiceDialog(i: number) {
    console.log('opening Dialog....');
    const invoiceToEdit = {
      ...this.invoices[i],
      items: this.invoices[i].items.map((item) => ({ ...item })),
      InvoiceDate: new Date(this.invoices[i].InvoiceDate),
      statusUpdate:this.invoices[i].statusUpdate.map((status) => ({...status}))
    };
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
        this.setInvoiceData();
        this.NbTostr.success('Invoice updated successfully', 'SUCCESS');
      }
    });
  }

  deleteInvoice(i: number) {
    this.invoices.splice(i, 1);
    this.setInvoiceData();
  }

  refresh() {
    window.location.reload();
  }
}
