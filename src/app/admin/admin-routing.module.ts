import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'invoices', component: InvoicesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'invoices', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
