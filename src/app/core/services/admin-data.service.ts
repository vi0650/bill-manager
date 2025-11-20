import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admins } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor() { }

  ngOnInit(): void {
    this.getAdmin()
  }

  Admin: Admins[] = [];

  getAdmin() {
    const storedAdmin = localStorage.getItem('Admins');
    if (storedAdmin) {
      this.Admin = JSON.parse(storedAdmin);
    } else {
      this.Admin = [{
        AdminId: 1,
        shopName: 'admin',
        userName: 'Admin',
        password: 'Admin@1234',
        role: 'super-admin',
        emailId: 'Admin@gmail.com',
        mobileNo: '+918934578435',
        address: 'India'
      }];
      this.setAdminData();
    }
  }

  setAdminData() {
    localStorage.setItem('Admins', JSON.stringify(this.Admin));
  }
}
