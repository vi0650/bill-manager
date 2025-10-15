import { Component } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Admins } from '../../../core/models/admin.model';

@Component({
  selector: 'add-admin',
  standalone: false,
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.scss',
})
export class AddAdminComponent {

  constructor(protected dialogRef: NbDialogRef<AddAdminComponent>, private NbTostrService:NbToastrService) {}

  newAdmin = { AdminId:'', shopName: '',username:'',emailId:'',mobileNo:'' }

  addAdmin() {  
    const user:Admins={AdminId:this.newAdmin.AdminId,shopName:this.newAdmin.shopName,userName:this.newAdmin.username,emailId:this.newAdmin.emailId,mobileNo:this.newAdmin.mobileNo};
    if((user.AdminId) && user.shopName && user.userName && user.emailId && user.mobileNo)
      this.dialogRef.close(this.newAdmin);
  }

  cancel() {
    this.dialogRef.close();
  }
}