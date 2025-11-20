import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { AdminsListComponent } from './admins-list/admins-list.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate:[AuthGuard],
    component: SuperAdminComponent,
    children: [
      { path: 'admins-list', component: AdminsListComponent },
      { path: '', redirectTo: 'admins-list', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
