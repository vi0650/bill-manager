import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddProductComponent } from './add-product/add-product.component';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private NbDialogService:NbDialogService) { }

  Products:Product[] = [
    { ProductId:'1', Name: 'Evo x30 3D Printer', Rate: '12000' },
    { ProductId:'2', Name: 'Product B', Rate: '200' },
    { ProductId:'3', Name: 'Product C', Rate: '300' },
  ];

  setProductsData() {
    localStorage.setItem('Products', JSON.stringify(this.Products));
  }
  

  openAddProductDialog(){
    console.log('opening dialog...');
    const dialogRef = this.NbDialogService.open(AddProductComponent);
    dialogRef.onClose.subscribe((product) => {
      if(product && product.ProductId && product.Name && product.Rate) {
        console.log('Product received:', product);
        this.Products.push(product);
        this.setProductsData();
      }
      console.log('Dialog closed', product);
    })
  }

  deleteProduct(index: number) {
    this.Products.splice(index, 1);
    this.setProductsData();
  }
  
}
