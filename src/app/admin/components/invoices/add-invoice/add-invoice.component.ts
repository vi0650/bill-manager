import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Invoice } from '../../../../core/models/invoice.model';

@Component({
  selector: 'app-add-invoice',
  standalone: false,
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.scss',
})
export class AddInvoiceComponent {

  constructor(protected dialogRef: NbDialogRef<AddInvoiceComponent>) { }

  invoice: Invoice = {
    customerName: '',
    phoneNo: '',
    emailAddress: '',
    items: [{ description: '', qty: 1, rate: 200, amount: 160 }],
    subtotal: 150,
    cgst: 9,
    taxableAmount: 13,
    discountPercent: 3,
    discount: 5,
    grandTotal: 130,
  };

  saveInvoice() {
    const bill : Invoice =this.invoice;
    console.log('bill data:-', bill);
    this.dialogRef.close();
  }

  addItem() {
    this.invoice.items.push({description:'',qty:0,rate:0,amount:160})
    console.log(this.invoice);
    
  }

  removeItem() {

  }

  calclateTotal(){

  }


  cancel() {
    this.dialogRef.close();
  }

}
