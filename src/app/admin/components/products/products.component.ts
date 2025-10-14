import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private NbDialogService:NbDialogService) { }

  Products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
  ];

  openAddProductDialog(){
    this.NbDialogService.open(ProductsComponent);
  }
  
}
