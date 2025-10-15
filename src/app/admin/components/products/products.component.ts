import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private NbDialogService:NbDialogService) { }

  Products = [
    { id: 1, name: 'Namkeen', price: 100 },
    { id: 2, name: 'Sweets', price: 200 },
    { id: 3, name: 'Dishes', price: 300 },
  ];

  openAddProductDialog(){
    this.NbDialogService.open(AddProductComponent);
  }
  
}
