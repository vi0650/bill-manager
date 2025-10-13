import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { NebulerModule } from '../shared/nebuler.module';
import { AdminsListComponent } from './admins-list/admins-list.component';
import { AddAdminComponent } from './admins-list/add-admin/add-admin.component';
import { FormsModule } from '@angular/forms';
import { SuperAdminRoutingModule } from './super-admin-routing.module';

@NgModule({
  declarations: [
    SuperAdminComponent,
    AdminsListComponent,
    AddAdminComponent,
  ],
  imports: [
    CommonModule,
    NebulerModule,
    FormsModule,
    SuperAdminRoutingModule
]
})
export class SuperAdminModule { }
