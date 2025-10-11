import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { NebulerModule } from '../shared/nebuler.module';
import { AdminsListComponent } from './admins-list/admins-list.component';
import { AddAdminComponent } from './admins-list/add-admin/add-admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SuperAdminComponent,
    AdminsListComponent,
    AddAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NebulerModule,
    FormsModule
]
})
export class SuperAdminModule { }
