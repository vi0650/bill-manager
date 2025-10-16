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

  constructor(private dialogRef: NbDialogRef<AddProductComponent>) { }


  newProduct = { Name: '', Rate: 0 };
  addProduct() {
    const product:Product = { ...this.newProduct };

    console.log('Product added:', product);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
