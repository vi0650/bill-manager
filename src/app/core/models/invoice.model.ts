export interface Invoice {
  customerName: string,
  phoneNo: string,
  emailAddress: string,
  InvoiceDate: Date,
  Address: string,
  items: invoiceItems[],
  subtotal: Number,
  taxableAmount: Number,
  discountPercent: Number,
  discount: Number,
  grandTotal: Number,
};

export interface invoiceItems {
  products:product[],
  qty: string,
  rate: string,
  gst: string,
  amount: string,
}

export interface product {
  ProductId: string;
  Name: string;
  Rate: string;
}
