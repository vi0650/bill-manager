import { Component,HostBinding } from '@angular/core';
import { NbDialogRef, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { Admins } from '../../../core/models/admin.model';

@Component({
  selector: 'add-admin',
  standalone: false,
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.scss',
})
export class AddAdminComponent {

  private index: number = 0;
  @HostBinding('class')
  classes = 'example-items-rows';
  positions = NbGlobalPhysicalPosition;

  constructor(protected dialogRef: NbDialogRef<AddAdminComponent>, private toastrService: NbToastrService) {}

  newAdmin = { shopName: '', title: '' }

  addAdmin() {  
    const user:Admins={shopName:this.newAdmin.shopName,title:this.newAdmin.title};
    console.log('addAdmin called with:', this.newAdmin); // Debug log
    if(user.shopName && user.title) {
      console.log('Closing dialog with data:', this.newAdmin); // Debug log
      this.dialogRef.close(this.newAdmin);
    } else{
      console.log('Validation failed - missing data'); 
      this.toastrService.show(status || 'Success', `Toast ${this.index}`)
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}