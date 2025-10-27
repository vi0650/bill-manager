import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  productCount: number = 0;
  constructor(private dialogRef: NbDialogRef<AddProductComponent>) { 
    this.productCount = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')!).length : 0;
    this.newProduct.ProductId = (this.productCount + 1).toString();
    console.log(this.productCount);
  }

  newProduct = { ProductId:'', Name: '', Rate: null };

  addProduct() {
    const product:Product = { ...this.newProduct };
    if( product.ProductId && product.Name && product.Rate) {
      this.dialogRef.close(this.newProduct);
    }
  }

  close() {
    this.dialogRef.close();
  }

}
