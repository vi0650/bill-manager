import { Component } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Invoice } from '../../../../core/models/invoice.model';

@Component({
  selector: 'app-add-invoice',
  standalone: false,
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.scss',
})
export class AddInvoiceComponent {

  public title?: string;

  constructor(protected dialogRef: NbDialogRef<AddInvoiceComponent>, private NbdialogService:NbDialogService) { }

  selectedItem: string = '';

  invoice: Invoice = {
    customerName: '',
    phoneNo: '',
    emailAddress: '',
    InvoiceDate: new Date(),
    items: [{ description: '', qty: 0, rate: 0, amount:0 }],
    subtotal: 0,
    cgst: 0,
    taxableAmount: 0,
    discountPercent: 0,
    discount: 0,
    grandTotal: 0,
  };

  saveInvoice() {
    const bill: Invoice = this.invoice;
    console.log('bill data:-', bill);
    this.dialogRef.close();
  }

  addItem() {
    this.NbdialogService.open(AddInvoiceComponent);
  }

  removeItem() {

  }

  calculateTotal() {

  }


  cancel() {
    this.dialogRef.close();
  }

}
