import { Component, Input } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Admins } from '../../../core/models/admin.model';

@Component({
  selector: 'add-admin',
  standalone: false,
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.scss',
})
export class AddAdminComponent {

  @Input() isEdit = false;
  @Input() editAdmin?: Admins;

  adminCount: number = 0;

  constructor(protected dialogRef: NbDialogRef<AddAdminComponent>, private NbTostrService: NbToastrService) {
    // this.adminCount = localStorage.getItem('Admins') ? JSON.parse(localStorage.getItem('Admins')!).length : 0;
    // this.newAdmin.AdminId = (this.adminCount + 1);
    console.log(this.adminCount);
  }

  ngOnInit(): void {
    if (this.isEdit && this.editAdmin) {
      this.newAdmin = {
        ...this.editAdmin
      };
    } else {
      this.adminCount = localStorage.getItem('Admins') ?
        JSON.parse(localStorage.getItem('Admins')!).length : 0;
      this.newAdmin.AdminId = (this.adminCount + 1);
    }
  }

  newAdmin = { AdminId: 0, shopName: '', userName: '', emailId: '', mobileNo: '',password:'', address: '', role: '' }


  addAdmin() {
    const user: Admins = { ...this.newAdmin };
    if (user.AdminId &&
      user.shopName &&
      user.userName &&
      user.emailId &&
      user.mobileNo &&
      user.password &&
      user.address
    ) {
      this.dialogRef.close(this.newAdmin);
    }
    console.log(user);
  }

  cancel() {
    this.dialogRef.close();
  }

}