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

  newAdmin = { shopName: '', title: '' }

  addAdmin() {  
    const user:Admins={shopName:this.newAdmin.shopName,title:this.newAdmin.title};
    console.log('addAdmin called with:', this.newAdmin); // Debug log
    if(user.shopName && user.title) {
      console.log('Closing dialog with data:', this.newAdmin); // Debug log
      this.dialogRef.close(this.newAdmin);
    } else {
      console.log('Validation failed - missing data'); // Debug log
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}