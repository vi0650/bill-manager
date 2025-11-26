import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() { }

  products: Product[] = [{ AdminId: 1, ProductId: 1, Name: 'dummy data', Rate: 100 }];

  private readonly storageKey = 'Products';

  getProducts(): Product[] {
    const storedProduct = localStorage.getItem(this.storageKey);
    return storedProduct ? JSON.parse(storedProduct) : 
    (this.setProducts(this.products), this.products ) ;
  }

  setProducts(product : Product[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(product));
  }


}
