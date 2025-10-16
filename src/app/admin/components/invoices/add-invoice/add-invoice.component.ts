import { Component } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Invoice, invoiceItems } from '../../../../core/models/invoice.model';

@Component({
  selector: 'app-add-invoice',
  standalone: false,
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.scss',
})
export class AddInvoiceComponent {

  constructor(protected dialogRef: NbDialogRef<AddInvoiceComponent>, private NbdialogService: NbDialogService) { }

  invoice: Invoice[] = [];

  selectedProduct: string = '';
  selectedGst: string = '';

  private emptyItem(): invoiceItems {
     return {
      products: '',
      qty: 0,
      rate: 0,
      gst: 0,
      amount: 0,
    } as invoiceItems;
  }

  addInvoice = { 
    customerName: '', 
    phoneNo: '', 
    emailAddress: '', 
    InvoiceDate: new Date(), 
    Address: '', 
    items: [this.emptyItem()], 
    subtotal: '', 
    cgst: '', 
    taxableAmount: '', 
    discountPercent: '', 
    discount: '', 
    grandTotal: '' 
  };

  saveInvoice() {
    const addedInvoice = { ...this.addInvoice };
    this.dialogRef.close(addedInvoice);
    console.log(addedInvoice);
  }

  addItem() {
    const newItem = this.emptyItem();
    this.addInvoice.items.push(newItem);
    console.log(this.addInvoice.items);
  }

  removeItem() {

  }

  calculateTotal() {

  }


  cancel() {
    this.dialogRef.close();
  }

}
