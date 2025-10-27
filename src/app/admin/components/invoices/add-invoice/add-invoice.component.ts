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

  ngOnInit(): void {
    this.getProductData();
  }

  // ------------------product data fetch from local storage--------------------------------

  products: Product[] = [];
  getProductData() {
    const fetchProduct = localStorage.getItem('Products');
    if (fetchProduct) {
      this.products = JSON.parse(fetchProduct);
    }
  }

  // ---------------Invoice add form-----------------------------------

  gstRate:string[]=['2','5','12','18','28']

  invoice: Invoice[] = [];
  selectedProduct: string = '';
  selectedGst: string = '';

  emptyItem(): invoiceItems {
    return {
      product: '',
      qty: '',
      rate: '',
      gst: this.selectedGst,
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

  updateRate(item: invoiceItems) {
    const selectedProduct = this.products.find(p => p.Name === item.product);
    if (selectedProduct) {
      item.rate = String(selectedProduct.Rate);
    }
  }

  removeItem(i: number) {
    this.addInvoice.items.splice(i, 1)
    console.log(this.addInvoice.items);
  }

  calculateTotal() {

  }


  cancel() {
    this.dialogRef.close();
  }

}
