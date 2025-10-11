import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { InvoiceListComponent } from './admin/components/invoice-list/invoice-list.component';
import { ProfileComponent } from './admin/components/profile/profile.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminsListComponent } from './super-admin/admins-list/admins-list.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'super-admin',
    component: SuperAdminComponent,
    children: [
      { path: 'admins-list', component: AdminsListComponent }
    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'bills', component: InvoiceListComponent },
      { path: 'Profile', component: ProfileComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }