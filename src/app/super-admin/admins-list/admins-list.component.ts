import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { Admins } from '../../core/models/admin.model';

@Component({
  selector: 'admins-list',
  standalone: false,
  templateUrl: './admins-list.component.html',
  styleUrl: './admins-list.component.scss',
})
export class AdminsListComponent implements OnInit {

  constructor(private dialogService: NbDialogService, private NbTostr: NbToastrService) {

  }

  @Output() adminsChange = new EventEmitter<Admins>();

  Admin: Admins[] = [];
  
  ngOnInit() {
    this.getAdminData();
  }

  getAdminData() {
    const storedAdmin = localStorage.getItem('Admins');
    if (storedAdmin) {
      this.Admin = JSON.parse(storedAdmin);
    } else {
      this.Admin;
      this.setAdminData();
    }
  }

  setAdminData() {
    localStorage.setItem('Admins', JSON.stringify(this.Admin));
  }

  openAddAdminDialog() {
    console.log('Opening dialog...');
    const adminDialog = this.dialogService.open(AddAdminComponent,{
      context:{
        isEdit:false,
      }
    });
    adminDialog.onClose.subscribe((admin) => {
      if (admin && admin.AdminId && admin.shopName && admin.userName && admin.emailId && admin.mobileNo && admin.password && admin.address && admin.role) {
        const adminExists = this.Admin.find(a => a.shopName === admin.shopName);
        if (adminExists) {
          this.NbTostr.warning("Admin "+ `${admin.shopName}` +" already exists.", "Warning", { duration: 3000 });
          return;
        }
        this.Admin.push(admin);
        this.setAdminData();
        this.NbTostr.success("Admin Added Successfully please refresh the page.", "Success", { duration: 3000 });
      }
      console.log('Dialog closed', admin);
    });
  }

  editAdminDialog(i:number){
    console.log('opened edit dialog');
    const adminEdit={
      ...this.Admin[i],
    };
    const adminDialog = this.dialogService.open(AddAdminComponent,{
      context:{
        isEdit:true,
        editAdmin:adminEdit,
      },
    });
    adminDialog.onClose.subscribe((updateAdmin) =>{
      if(updateAdmin && updateAdmin.AdminId){
        this.Admin[i] = updateAdmin;
        this.setAdminData();
        this.NbTostr.success('Admin updated successfully','SUCCESS');
      }
    })
  }

  deleteAdmin(i: number) {
    if (!confirm("Are you sure to delete this admin")) return;
    else {
      this.NbTostr.danger("Admin Deleted Successfully", "Deleted", { duration: 3000 });
    }
    this.Admin.splice(i, 1);
    this.setAdminData();
  }

  refresh() {
    window.location.reload();
  }

}