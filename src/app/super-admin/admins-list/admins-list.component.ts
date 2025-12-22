import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { Admins, Role } from '../../core/models/admin.model';
import { Router } from '@angular/router';
import { AdminDataService } from '../../core/services/admin-data.service';

@Component({
  selector: 'admins-list',
  standalone: false,
  templateUrl: './admins-list.component.html',
  styleUrl: './admins-list.component.scss',
})
export class AdminsListComponent implements OnInit {

  constructor(private dialogService: NbDialogService, private NbTostr: NbToastrService,private router:Router,private AdminDataService: AdminDataService) { }

  Admin: Admins[] = [];
  roles = Object.values(Role);

  ngOnInit() {
    this.Admin = this.AdminDataService.getAdmin();
    console.table(this.Admin);
  }

  openAddAdminDialog() {
    console.log('Opening dialog...');
    const adminDialog = this.dialogService.open(AddAdminComponent, {
      context: {
        isEdit: false,
      }
    });
    adminDialog.onClose.subscribe((admin) => {
      if (admin && admin.AdminId && admin.shopName && admin.userName && admin.emailId && admin.mobileNo && admin.password && admin.address && admin.role) {
        const adminExists = this.Admin.find(a => a.shopName === admin.shopName);
        if (adminExists) {
          this.NbTostr.warning("Admin " + `${admin.shopName}` + " already exists.", "Warning", { duration: 3000 });
          return;
        }
        this.Admin.push(admin);
        this.AdminDataService.setAdminData(this.Admin)
        this.NbTostr.success("Admin Added Successfully please refresh the page.", "Success", { duration: 3000 });
      }
      console.log('Dialog closed', admin);
    });
  }

  editAdminDialog(i: number) {
    console.log('opened edit dialog');
    const adminEdit = {
      ...this.Admin[i],
    };
    const adminDialog = this.dialogService.open(AddAdminComponent, {
      context: {
        isEdit: true,
        editAdmin: adminEdit,
      },
    });
    adminDialog.onClose.subscribe((updateAdmin) => {
      if (updateAdmin && updateAdmin.AdminId) {
        this.Admin[i] = updateAdmin;
        this.AdminDataService.setAdminData(this.Admin)
        this.NbTostr.success('Admin updated successfully', 'SUCCESS');
      }
    })
  }

  deleteAdmin(i: number) {
    if (!confirm("Are you sure to delete this admin")) return;
    else {
      this.NbTostr.danger("Admin Deleted Successfully", "Deleted", { duration: 3000 });
    }
    this.Admin.splice(i, 1);
    this.AdminDataService.setAdminData(this.Admin)
  }

  refresh() {
    this.router.navigate([this.router.url], { onSameUrlNavigation: 'reload' });
  }

}