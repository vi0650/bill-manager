import { Component, Input } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Invoice, invoiceItems, statusDetail } from '../../../../core/models/invoice.model';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-add-invoice',
  standalone: false,
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.scss',
})
export class AddInvoiceComponent {

  @Input() isEdit = false; // when open invoice dialog it checks
  @Input() editInvoice?: Invoice;

  invoiceCount: number = 0;
  constructor(
    protected invoiceDialogRef: NbDialogRef<AddInvoiceComponent>,
    private NbTostr: NbToastrService
  ) {

    // for generate invoice id
    this.invoiceCount = localStorage.getItem('Invoices') ? JSON.parse(localStorage.getItem('Invoices')!).length : 0;
    this.addInvoice.invoiceId = (this.invoiceCount + 1);
    console.log(this.invoiceCount);
  }

  ngOnInit(): void {
    this.getProductData();
    if (this.isEdit && this.editInvoice) {
      this.addInvoice = {
        ...this.editInvoice,
        items: this.editInvoice.items.map(item => ({ ...item })),
        InvoiceDate: new Date(this.editInvoice.InvoiceDate)
      };
    } else {
      this.invoiceCount = localStorage.getItem('Invoices') ?
        JSON.parse(localStorage.getItem('Invoices')!).length : 0;
      this.addInvoice.invoiceId = (this.invoiceCount + 1);
    }
  }

  // ------------------product data fetch from local storage--------------------------------

  products: Product[] = [];
  getProductData() {
    const productData = localStorage.getItem('Products');
    if (productData) {
      this.products = JSON.parse(productData);
    }
  }

  // ---------------Invoice add form-----------------------------------

  gstRate: number[] = [0, 5, 18, 40];
  statusUpdate: statusDetail[] = [{ text: 'paid', status: 'success' }, { text: 'pending', status: 'warning' }];
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

  emptyStatus(): statusDetail {
    return {
      status: '',
      text: ''
    } as statusDetail;
  }

  addInvoice: Invoice = {
    invoiceId: 0,
    customerName: '',
    phoneNo: '',
    emailAddress: '',
    InvoiceDate: new Date(),
    Address: '',
    items: [this.emptyItem()],
    comments: '',
    subtotal: 0,
    gstAmount: 0,
    grandTotal: 0,
    statusUpdate: [this.emptyStatus()],
  };

  addItem() {
    const newIndex = this.addInvoice.items.length - 1;
    const newItem = this.addInvoice.items[newIndex];
    if (newItem.product && newItem.rate && newItem.qty && newItem.amount) {
      this.addInvoice.items.push(this.emptyItem());
    } else {
      this.NbTostr.info(
        'please enter product,rate & quantity',
        'Details are Missing'
      );
    }
    console.log(this.addInvoice.items);
  }

  updateRate(item: invoiceItems) {
    const selectedProduct = this.products.find((p) => p.Name === item.product);
    if (selectedProduct) {
      item.rate = Number(selectedProduct.Rate);
      this.calculateAmount(item);
      this.grandTotal();
    }
  }

  removeItem(i: number) {
    this.addInvoice.items.splice(i, 1);
    this.grandTotal();
    console.log(this.addInvoice.items);
  }

  calculateAmount(item: invoiceItems) {
    const rate = Number(String(item.rate) || 0);
    const qty = Number(String(item.qty) || 0);
    const gst = Number(item.gst || 0);

    const taxableAmount = rate * qty;
    const gstAmount = taxableAmount * (gst / 100);
    const finalAmount = gstAmount + taxableAmount;

    item.amount = Number(String(finalAmount.toFixed(2)));
    console.log(gstAmount);
  }

  grandTotal() {
    let totalTaxableAmount = 0;
    let totalAmount = 0;
    let gstTotal = 0;

    for (const item of this.addInvoice.items) {
      const gstAmount = Number(item.amount);
      const gst = Number(item.gst);
      const gstRemove = 1 + gst / 100;
      let amount = 0;
      amount = gstAmount / gstRemove;
      totalTaxableAmount += amount;

      const grandTotal = Number(item.amount);
      totalAmount += grandTotal;

      const itemAmount = Number(item.amount);
      const gstValue = itemAmount - amount;
      gstTotal += gstValue;
    }
    this.addInvoice.subtotal = totalTaxableAmount;
    this.addInvoice.gstAmount = gstTotal;
    this.addInvoice.grandTotal = totalAmount;
    console.log(this.addInvoice.subtotal);
    console.log(this.addInvoice.grandTotal);
  }

  // ---------------------------------------after invoice filled validate------------------------------------------------------------------------

  cancel() {
    this.invoiceDialogRef.close();
  }

  saveInvoice() {
    const invoiceData: Invoice = { ...this.addInvoice };
    if (
      invoiceData &&
      invoiceData.invoiceId &&
      invoiceData.customerName &&
      invoiceData.phoneNo &&
      invoiceData.InvoiceDate &&
      invoiceData.Address &&
      invoiceData.items &&
      invoiceData.statusUpdate
    ) {
      this.invoiceDialogRef.close(invoiceData);
    }
    console.log(invoiceData);
  }
}
