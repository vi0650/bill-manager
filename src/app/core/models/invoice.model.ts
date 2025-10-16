export interface Invoice {
  customerName: string,
  phoneNo: string,
  emailAddress: string,
  InvoiceDate: Date,
  Address: string,
  items:invoiceItems[],
  subtotal: Number,
  taxableAmount: Number,
  discountPercent: Number,
  discount: Number,
  grandTotal: Number,
};

export interface invoiceItems {
  products: string,
  qty: Number,
  rate: Number,
  gst:Number,
  amount: Number
}
