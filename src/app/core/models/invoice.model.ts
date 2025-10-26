import { Admins } from "./admin.model";

export interface Invoice {
  customerName: string,
  phoneNo: string,
  shopName:Admins,
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
  product:string,
  qty: string,
  rate: string,
  gst: string,
  amount: string,
}

export interface Product{
    ProductId:string;
    Name:string;
    Rate:string;
}