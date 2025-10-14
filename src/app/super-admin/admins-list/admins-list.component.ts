import { Component, OnInit } from '@angular/core';
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

  constructor(private dialogService: NbDialogService, private NbTostrService: NbToastrService) {
  }

  Admin: Admins[] = [];

  ngOnInit() {
    AddAdminComponent
    this.getAdminData();
  }

  getAdminData() {
    const storedAdmin = localStorage.getItem('Admins');
    if (storedAdmin) {
      this.Admin = JSON.parse(storedAdmin);
    } else {
      this.Admin = [{ AdminId: '1', shopName: 'haldiram', userName: 'haldiram', emailId: 'haldiram@gmail.com', mobileNo: '+919993249324' },
      { AdminId: '2', shopName: 'bikaner', userName: 'bikaner', emailId: 'bikaner@gmail.com', mobileNo: '+919993249325' },
      { AdminId: '3', shopName: 'gopal', userName: 'gopal', emailId: 'gopal@gmail.com', mobileNo: '+919993249326' }
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
      if (admin) {
        this.Admin.push(admin);
        this.setAdminData();
        this.NbTostrService.success("Admin Added Successfully please refresh the page.", "Success", { duration: 3000 });
      }
    });
  }

  deleteAdmin(i: number) {
    if (!confirm("Are you sure to delete this record?")) return;
    else {
      this.NbTostrService.danger("Admin Deleted Successfully", "Deleted", { duration: 3000 });
    }
    localStorage.removeItem('Admins');
    this.Admin.splice(i, 1);
    this.setAdminData();
    console.log(i);
  }

}