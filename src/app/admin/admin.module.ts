import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './admin.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { AddInvoiceComponent } from './components/invoices/add-invoice/add-invoice.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { NebulerModule } from '../shared/nebuler.module';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    AdminComponent,
    InvoicesComponent,
    AddInvoiceComponent,
    ProductsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NebulerModule,
    AdminRoutingModule,
    FormsModule,
    
  ]
})
export class AdminModule { }