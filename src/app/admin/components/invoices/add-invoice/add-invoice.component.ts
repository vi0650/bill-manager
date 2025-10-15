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

  constructor(protected dialogRef: NbDialogRef<AddInvoiceComponent>, private NbdialogService: NbDialogService) { }

  invoice: Invoice[]=[];
  
  selectedProduct: string = '';
  selectedGst: string = '';

  gst={ cgst: 0, sgst: 0 }
  newItems = { products: this.selectedProduct, qty: 0, rate: 0, gst:this.selectedGst, amount: 0 };
  addInvoice = { customerName: '',phoneNo: '',emailAddress: '',InvoiceDate: new Date(),Address: '',items: [this.newItems],subtotal: 0,cgst:0,taxableAmount: 0,discountPercent: 0,discount: 0,grandTotal: 0 };

  saveInvoice() {
    const addedInvoice = { ...this.addInvoice };
    this.dialogRef.close(addedInvoice);
    console.log(addedInvoice);
  }

  addItem() {
    const newItem = this.newItems;
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
