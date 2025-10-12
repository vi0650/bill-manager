import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Admins } from '../../../core/models/admin.model';

@Component({
  selector: 'add-admin',
  standalone: false,
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.scss',
})
export class AddAdminComponent {

  constructor(protected dialogRef: NbDialogRef<AddAdminComponent>) {}

  newAdmin = { shopName: '',username:'',email:'',mobileNo:'' }

  addAdmin() {  
    const user:Admins={shopName:this.newAdmin.shopName,userName:this.newAdmin.username,emailId:this.newAdmin.email,mobileNo:this.newAdmin.mobileNo};
    if(user.shopName && user.userName && user.emailId && user.mobileNo)
      this.dialogRef.close(this.newAdmin);
  }

  cancel() {
    this.dialogRef.close();
  }
}