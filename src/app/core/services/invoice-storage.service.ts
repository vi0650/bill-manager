import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceStorageService {

  constructor() { }

  invoices:Invoice[] = [];

  private readonly storageKey = 'Invoices';

  getInvoices(): Invoice[]{
    const storedInvoices = localStorage.getItem(this.storageKey);
    return storedInvoices ? JSON.parse(storedInvoices) : [];
  }

  setInvoices(invoices: Invoice[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(invoices));
  }
}