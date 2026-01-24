import { DecimalPipe } from "@angular/common";

export interface Invoice {
  AdminId: number | null | any,
  invoiceId:number | null | any,
  customerName: string | any,
  phoneNo: string | any,
  emailAddress: string | any,
  InvoiceDate: Date | string | any,
  Address: string | any,
  items: invoiceItems[],
  comments:string | any,
  subtotal: number | null | any,
  gstAmount: number | null | any,
  grandTotal: number | null | any,
  statusUpdate: statusDetail[];
};

export interface invoiceItems {
  product:string | any,
  rate: DecimalPipe | null | any,
  qty: number | null | any,
  gst: number | null | any,
  amount: number | null | any,
}

export interface statusDetail{
  status:string | any,
  text:string | any
}