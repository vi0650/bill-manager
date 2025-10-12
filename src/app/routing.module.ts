import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'super-admin',
    loadChildren: () => import('./super-admin/super-admin.module')
      .then(m => m.SuperAdminModule),
  },
  // {
  //   path: 'super-admin',
  //   component: SuperAdminComponent,
  //   children: [
  //     { path: 'admins-list', component: AdminsListComponent }
  //   ]
  // },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
  },
  // {
  //   path: 'admin', component: AdminComponent,
  //   children: [
  //     { path: 'bills', component: InvoiceListComponent },
  //     { path: 'Profile', component: ProfileComponent },
  //     { path: 'products', component: InvoiceListComponent }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }