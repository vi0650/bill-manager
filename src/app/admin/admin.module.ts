import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { AdminComponent } from './admin.component';
import { NebulerModule } from '../shared/nebuler.module';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    InvoiceListComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NebulerModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
