import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { Admins } from '../../core/models/admin.model';

@Component({
  selector: 'admins-list',
  standalone: false,
  templateUrl: './admins-list.component.html',
  styleUrl: './admins-list.component.scss',
})
export class AdminsListComponent implements OnInit {

  constructor(private dialogService: NbDialogService) {
  }

  Admin: Admins[] = [];

  ngOnInit() {
    AddAdminComponent
    this.getAdminData();
  }

  getAdminData(){
   const storedAdmin = localStorage.getItem('Admins');
   if(storedAdmin){
    this.Admin = JSON.parse(storedAdmin);
   }else{
    this.Admin = [{ AdminId:'1', shopName:'haldiram',userName:'haldiram',emailId:'haldiram@gmail.com',mobileNo:'+919993249324'}];
    this.setAdminData();
   }
  }

  setAdminData(){
    localStorage.setItem('Admins',JSON.stringify(this.Admin));
  }
  
  openAddAdminDialog() {
    console.log('Opening dialog...');
    const dialogRef = this.dialogService.open(AddAdminComponent);
    dialogRef.onClose.subscribe((admin) => {
      if (admin) {
        this.Admin.push(admin);
        this.setAdminData();
      }
    });
  }

  deleteAdmin() {
    localStorage.removeItem
  }


}