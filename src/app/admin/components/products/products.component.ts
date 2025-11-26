import { Component } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddProductComponent } from './add-product/add-product.component';
import { Product } from '../../../core/models/product.model';
import { ProductStorageService } from '../../../core/services/product-storage.service';

@Component({
  selector: 'products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  constructor(private productDialogService: NbDialogService, 
    private NbTostr: NbToastrService,
    private productStorageService: ProductStorageService
  ) { }

  ngOnInit() {
    this.Products = this.productStorageService.getProducts();
    console.table(this.Products)
  }

  Products: Product[] = [];

  openAddProductDialog() {
    console.log('opening add product dialog...');
    const productDialog = this.productDialogService.open(AddProductComponent, {
      context: {
        isEdit: false,
      }
    });
    productDialog.onClose.subscribe((product) => {
      if (product && product.ProductId && product.Name && product.Rate) {
        const productExist = this.Products.find(p => p.Name === product.Name);
        if (productExist) {
          this.NbTostr.danger("please use unique name for Products", `${product.Name} already exist.`)
          return;
        }
        console.log('Product received:', product);
        this.Products.push(product);
        this.productStorageService.setProducts(this.Products);
        this.NbTostr.success(`Product added successfully.`, "SUCCESS", { duration: 3000 });
      }
      console.log('Dialog closed', product);
    })
  }

  editProductDialog(i: number) {
    console.log('opening edit product dialog...');
    const productEdit = {
      ...this.Products[i],
    };
    console.log(productEdit);

    const productDialog = this.productDialogService.open(AddProductComponent, {
      context: {
        isEdit: true,
        editProduct: productEdit,
      },
    });
    productDialog.onClose.subscribe((updateProduct) => {
      if (updateProduct && updateProduct.ProductId && updateProduct.Name && updateProduct.Rate) {
        this.Products[i] = updateProduct;
        this.productStorageService.setProducts(this.Products);
        this.NbTostr.success('Product updated successfully', 'SUCCESS');
      }
    })
  }

  deleteProduct(i: number) {
    this.Products.splice(i, 1);
    this.productStorageService.setProducts(this.Products);
    this.NbTostr.danger('Product deleted successfully', 'SUCCESS');
  }

  refresh() {
    window.location.reload();
  }

}