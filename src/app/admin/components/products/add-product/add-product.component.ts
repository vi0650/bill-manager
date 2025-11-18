import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  @Input() isEdit = false;
  @Input() editProduct?: Product;

  productCount: number = 0;
  constructor(private dialogRef: NbDialogRef<AddProductComponent>) {
    this.productCount = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')!).length : 0;
    this.newProduct.ProductId = (this.productCount + 1); // AI generated
    console.log(this.productCount);
  }

  ngOnInit(): void {
    if (this.isEdit && this.editProduct) {
      this.newProduct = { ...this.editProduct };
    } else {
      this.productCount = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')!).length : 0;
      this.newProduct.ProductId = (this.productCount + 1);
    }
  }

  newProduct: Product = { AdminId:null, ProductId: null, Name: '', Rate: null };

  addProduct() {
    const product: Product = { ...this.newProduct };
    if (product.ProductId && product.Name && product.Rate) {
      this.dialogRef.close(product);
    }
  }

  close() {
    this.dialogRef.close();
  }

}
