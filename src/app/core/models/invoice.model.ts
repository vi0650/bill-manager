

export interface Invoice {
  customerName: string,
  phoneNo: string,
  emailAddress: string,
  InvoiceDate: Date,
  Address: string,
  items: invoiceItems[],
  comments:string,
  subtotal: Number | null,
  gstAmount: Number | null,
  grandTotal: Number | null,
};

export interface invoiceItems {
  product:string,
  rate: number | null,
  qty: number | null,
  gst: number | null,
  amount: number | null,
}