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

  gstRate: number[] = [2, 5, 12, 18, 28]

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
    shopName: '',
    emailAddress: '',
    InvoiceDate: new Date(),
    Address: '',
    items: [this.emptyItem()],
    subtotal: 0,
    gstAmount:0,
    grandTotal: 0,
  };


  addItem() {
    const newIndex = this.addInvoice.items.length - 1;
    const newItem = this.addInvoice.items[newIndex];
    if (newItem.product && newItem.rate && newItem.qty && newItem.amount ) {
      this.addInvoice.items.push(this.emptyItem())
    } else {
      this.NbTostr.info("please enter product,rate & quantity", `Details are Missing`)
    }
    console.log(this.addInvoice.items);
  }

  updateRate(item: invoiceItems) {
    const selectedProduct = this.products.find(p => p.Name === item.product);
    if (selectedProduct) {
      item.rate = Number(selectedProduct.Rate);
      this.calculateAmount(item);
      this.grandTotal();
    }
  }

  removeItem(i: number) {
    this.addInvoice.items.splice(i, 1)
    this.grandTotal()
    console.log(this.addInvoice.items);
  }

  calculateAmount(item: invoiceItems) {
    const rate = Number(String(item.rate) || 0);
    const qty = Number(String(item.qty) || 0);
    const gst = Number((item.gst) || 0);

    const taxableAmount = rate * qty;
    const gstAmount = taxableAmount * (gst / 100);
    const finalAmount = gstAmount + taxableAmount;

    item.amount = Number(String(finalAmount.toFixed(2)));
    console.log(gstAmount);
  }

  grandTotal(){
    let totalTaxableAmount = 0;
    let totalAmount = 0;
    let gstTotal = 0;

    for(const item of this.addInvoice.items){
      const gstAmount = Number(item.amount);
      const gst = Number(item.gst);
      const gstRemove = 1 + (gst/100);
      let amount = 0;
      amount = gstAmount / gstRemove;
      totalTaxableAmount += amount;

      const grandTotal = Number(item.amount);
      totalAmount += grandTotal;

      const itemAmount = Number(item.amount);
      const gstValue =  itemAmount - amount;
      gstTotal += gstValue
    }
    this.addInvoice.subtotal = totalTaxableAmount;
    this.addInvoice.grandTotal = totalAmount;
    this.addInvoice.gstAmount = gstTotal;
    console.log(this.addInvoice.subtotal + "sub Total");
    console.log(this.addInvoice.grandTotal + "grand total");
  }

  // ---------------------------------------after invoice filled validate------------------------------------------------------------------------

  cancel() {
    this.dialogRef.close();
  }

  saveInvoice() {
    const addedInvoice: Invoice = { ...this.addInvoice };
    this.dialogRef.close(addedInvoice);
    console.log(addedInvoice);
  }
}
