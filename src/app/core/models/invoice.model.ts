

export interface Invoice {
  invoiceId:Number | null | any,
  customerName: string | any,
  phoneNo: string | any,
  emailAddress: string | any,
  InvoiceDate: Date | string | any,
  Address: string | any,
  items: invoiceItems[],
  comments:string | any,
  subtotal: Number | null | any,
  gstAmount: Number | null | any,
  grandTotal: Number | null | any
};

export interface invoiceItems {
  product:string | any,
  rate: number | null | any,
  qty: number | null | any,
  gst: number | null | any,
  amount: number | null | any,
}

export interface statusDetail{
  status:string,
  text:string
}