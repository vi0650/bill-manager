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
    this.loadAdminsFromStorage();
    console.log('AdminsListComponent initialized with Admin array:', this.Admin);
  }

  private loadAdminsFromStorage() {
    const storedAdmins = localStorage.getItem('admins');
    if (storedAdmins) {
      this.Admin = JSON.parse(storedAdmins);
      console.log('Loaded admins from localStorage:', this.Admin);
    } else {
      // Default data if no stored data
      this.Admin = [
        { shopName: 'Haldiram',userName:'hldr',emailId:'haldiram@gmail.com',mobileNo:'+919932523523'},
        { shopName: 'Bikaji', userName:'bkg',emailId:'bikaji@gmail.com',mobileNo:'+919938548523' }
      ];
      this.saveAdminsToStorage();
      console.log('No stored data found, using default admins:', this.Admin);
    }
  }

  private saveAdminsToStorage() {
    localStorage.setItem('admins', JSON.stringify(this.Admin));
    console.log('Saved admins to localStorage:', this.Admin);
  }

  deleteAdmin(index: number) {
    this.Admin.splice(index, 1);
    this.saveAdminsToStorage();
    console.log('Deleted admin at index', index, 'Updated array:', this.Admin);
  }

  clearAllAdmins() {
    this.Admin = [];
    this.saveAdminsToStorage();
    console.log('Cleared all admins');
  }

  openAddAdminDialog() {
    console.log('Opening dialog...'); // Debug log
    const dialogRef = this.dialogService.open(AddAdminComponent);
    dialogRef.onClose.subscribe((result) => {
      console.log('Dialog closed with result:', result);
      if (result) {
        console.log('Adding admin to list:', result);
        this.Admin.push(result);
        this.saveAdminsToStorage();
        console.log('Updated Admin array and saved to localStorage:', this.Admin); // Debug log
      }
    });
  }
}