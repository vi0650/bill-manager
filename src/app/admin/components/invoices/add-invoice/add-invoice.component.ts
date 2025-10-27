import { Component } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Invoice, invoiceItems } from '../../../../core/models/invoice.model';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-add-invoice',
  standalone: false,
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.scss',
})
export class AddInvoiceComponent {

  constructor(protected dialogRef: NbDialogRef<AddInvoiceComponent>, private NbTostr: NbToastrService) { }

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

  gstRate:number[]=[2,5,12,18,28]

  invoice: Invoice[] = [];
  selectedProduct: string = '';
  selectedGst: number | null = null;

  emptyItem(): invoiceItems {
    return {
      product: '',
      qty: null,
      rate: null,
      gst: this.selectedGst,
      amount: null,
    } as invoiceItems;
  }

  addInvoice = {
    customerName: '',
    phoneNo: '',
    shopName:'',
    emailAddress: '',
    InvoiceDate: new Date(),
    Address: '',
    items: [this.emptyItem()],
    subtotal: 0,
    taxableAmount: 0,
    discountPercent: 0,
    discount: 0,
    grandTotal: 0,
  };

  saveInvoice() {
    const addedInvoice:Invoice = { ...this.addInvoice };
    this.dialogRef.close(addedInvoice);
    console.log(addedInvoice);
  }

  addItem() {
    const newItem = this.emptyItem();
    this.addInvoice.items.push(newItem)
    console.log(this.addInvoice.items);
  }

  updateRate(item: invoiceItems) {
    const selectedProduct = this.products.find(p => p.Name === item.product);
    if (selectedProduct) {
      item.rate = Number(selectedProduct.Rate);
      this.calculateAmount(item)
    }
  }

  removeItem(i: number) {
    this.addInvoice.items.splice(i, 1)
    console.log(this.addInvoice.items);
  }

  calculateAmount(item:invoiceItems) {
    const rate = Number(String(item.rate) || 0);
    const qty = Number(String(item.qty) || 0);
    const gst = Number((item.gst) || 0);

    const taxableAmount = rate * qty;
    const gstAmount = taxableAmount * (gst/100);
    const finalAmount = gstAmount + taxableAmount;

    item.amount = Number(String(finalAmount.toFixed(2)));
    console.log(item.amount);
  }


  cancel() {
    this.dialogRef.close();
  }

}
