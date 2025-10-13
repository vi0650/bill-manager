export interface invoiceItems {
  description: string,
  qty: Number,
  rate: Number,
  amount: Number
}

export interface Invoice {
  customerName: string,
  phoneNo: string,
  emailAddress: string,
  items:invoiceItems[],
  subtotal: Number,
  cgst: Number,
  taxableAmount: Number,
  discountPercent: Number,
  discount: Number,
  grandTotal: Number,
};