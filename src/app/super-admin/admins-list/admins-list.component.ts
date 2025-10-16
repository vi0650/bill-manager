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

  constructor(private dialogService: NbDialogService, private NbTostrService: NbToastrService) {
  }

  @Output() adminsChange = new EventEmitter<Admins[]>();

  Admin: Admins[] = [];

  ngOnInit() {
    AddAdminComponent
    this.getAdminData();
  }

   private emitAdmins() {
    // Emit a new array reference to help OnPush children detect changes
    this.adminsChange.emit([...this.Admin]);
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
    this.emitAdmins();
  }

  setAdminData() {
    localStorage.setItem('Admins', JSON.stringify(this.Admin));
  }

  openAddAdminDialog() {
    console.log('Opening dialog...');
    const dialogRef = this.dialogService.open(AddAdminComponent);
    dialogRef.onClose.subscribe((...admin) => {
      if (admin) {
        const adminExists = this.Admin.some(a => a.AdminId === admin[0].AdminId);
        if (adminExists) {
          this.NbTostrService.warning("Admin with this ID already exists.", "Warning", { duration: 3000 });
          return;
        }
        this.Admin.push(...admin);
        this.setAdminData();
        this.emitAdmins();
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
    this.emitAdmins();
    console.log(i);
  }

  refresh() {
    window.location.reload();
  }

}