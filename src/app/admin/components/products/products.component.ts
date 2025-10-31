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
export class ProductsComponent{

  constructor(private productDialogService: NbDialogService, private NbTostr: NbToastrService) { }

  ngOnInit() {
    this.getProductsData();
  }

  Products: Product[] = [];

  getProductsData() {
    const storedProducts = localStorage.getItem('Products');
    if (storedProducts) {
      this.Products = JSON.parse(storedProducts);
    } else {
      this.Products = [{ ProductId: '1', Name: 'dummy data', Rate: 100 }];
      this.setProductsData();
    }
  }

  setProductsData() {
    localStorage.setItem('Products', JSON.stringify(this.Products));
  }

  openAddProductDialog() {
    console.log('opening dialog...');
    const productDialog = this.productDialogService.open(AddProductComponent);
    productDialog.onClose.subscribe((product) => {
      if (product && product.ProductId && product.Name && product.Rate) {
        const productExist = this.Products.find(p => p.Name === product.Name);
        if (productExist) {
          this.NbTostr.danger("please use unique name for Products", `${product.Name} already exist.`)
          return;
        }
        console.log('Product received:', product);
        this.Products.push(product);
        this.setProductsData();
        this.NbTostr.success(`Product added successfully.`, "SUCCESS", { duration: 3000 });
      }
      console.log('Dialog closed', product);
    })
  }

  editProductDialog(i:number){
  }

  deleteProduct(i: number) {
    this.Products.splice(i, 1);
    this.setProductsData();
  }

  refresh() {
    window.location.reload();
  }

}