import { Component } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Invoice, invoiceItems } from '../../../../core/models/invoice.model';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-add-invoice',
  standalone: false,
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.scss',
})
export class AddInvoiceComponent {

  constructor(protected dialogRef: NbDialogRef<AddInvoiceComponent>, private NbdialogService: NbDialogService) { }

  invoice: Invoice[] = [];

  product:Product[]=[{ProductId:'1',Name:'kurkure',Rate:'20'},{ProductId:'2',Name:'chataka pataka',Rate:'20'}];

  selectedProduct: string = '';
  selectedGst: string = '';

  emptyItem(): invoiceItems {
     return {
      products:this.product,
      qty: '',
      rate: '',
      gst: '',
      amount: '',
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

  removeItem(i:number) {
    this.addInvoice.items.splice(i,1)
    console.log(this.addInvoice.items);
  }

  calculateTotal() {

  }


  cancel() {
    this.dialogRef.close();
  }

}
