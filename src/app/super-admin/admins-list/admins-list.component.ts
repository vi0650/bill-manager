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
      this.Admin = [{ AdminId: '1', shopName: 'haldiram', userName: 'haldiram', emailId: 'haldiram@gmail.com', mobileNo: '+919993249324',address:'india' },
      { AdminId: '2', shopName: 'bikaner', userName: 'bikaner', emailId: 'bikaner@gmail.com', mobileNo: '+919993249325',address:'india' },
      { AdminId: '3', shopName: 'gopal', userName: 'gopal', emailId: 'gopal@gmail.com', mobileNo: '+919993249326',address:'india' }
      ];
      this.setAdminData();
    }
  }

  setAdminData() {
    localStorage.setItem('Admins', JSON.stringify(this.Admin));
  }

  openAddAdminDialog() {
    console.log('Opening dialog...');
    const dialogRef = this.dialogService.open(AddAdminComponent);
    dialogRef.onClose.subscribe((admin) => {
      if (admin && admin.AdminId && admin.shopName && admin.userName && admin.emailId && admin.mobileNo && admin.address) {
        const adminExists = this.Admin.some(a => a.shopName === admin.shopName);
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

  deleteAdmin(i: number) {
    if (!confirm("Are you sure to delete this admin")) return;
    else {
      this.NbTostr.danger("Admin Deleted Successfully", "Deleted", { duration: 3000 });
    }
    localStorage.removeItem('Admins');
    this.Admin.splice(i, 1);
    this.setAdminData();
  }

  refresh() {
    window.location.reload();
  }

}