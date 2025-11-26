import { Injectable } from '@angular/core';
import { Admins } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor() { }

  ngOnInit(): void {
    this.getAdmin()
  }

  private readonly storageKey = 'Admins';


  Admins: Admins[] = [{
      AdminId: 1,
      shopName: 'admin',
      userName: 'Admin',
      password: 'Admin@1234',
      role: 'super-admin',
      emailId: 'Admin@gmail.com',
      mobileNo: '+918934578435',
      address: 'India'
    }];

  getAdmin(): Admins[] {
    const storedAdmin = localStorage.getItem(this.storageKey);
    return storedAdmin ? JSON.parse(storedAdmin) : (this.setAdminData(this.Admins),this.Admins);
  }

  setAdminData(Admin: Admins[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(Admin));
  }
}
