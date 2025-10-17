import { Component } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddProductComponent } from './add-product/add-product.component';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private NbDialogService: NbDialogService, private NbTostr: NbToastrService) { }

  ngOnInit() {
    this.getProductsData();
  }

  Products: Product[] = [];

  getProductsData() {
    const storedProducts = localStorage.getItem('Products');
    if (storedProducts) {
      this.Products = JSON.parse(storedProducts);
    } else {
      this.Products = [{ ProductId: '1', Name: 'Evo x30 3D Printer', Rate: '12000' },
      { ProductId: '2', Name: 'Creality Ender 3 Pro', Rate: '15000' },
      { ProductId: '3', Name: 'Anycubic i3 Mega', Rate: '18000' }
      ];
      this.setProductsData();
    }
  }

  setProductsData() {
    localStorage.setItem('Products', JSON.stringify(this.Products));
  }

  openAddProductDialog() {
    console.log('opening dialog...');
    const dialogRef = this.NbDialogService.open(AddProductComponent);
    dialogRef.onClose.subscribe((product) => {
      if (product && product.ProductId && product.Name && product.Rate) {
        console.log('Product received:', product);
        this.Products.push(product);
        this.setProductsData();
        this.NbTostr.success("Product " + `${product.Name}` + " added successfully.", "Success", { duration: 3000 });
      }
      console.log('Dialog closed', product);
    })
  }

  deleteProduct(i: number) {
    localStorage.removeItem('Products');
    this.Products.splice(i, 1);
    this.setProductsData();
  }

  refresh() {
    window.location.reload();
  }

}