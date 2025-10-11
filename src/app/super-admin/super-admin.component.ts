import { Component } from '@angular/core';

@Component({
  selector: 'super-admin',
  standalone: false,
  templateUrl: './super-admin.component.html',
  styleUrl: './super-admin.component.css'
})
export class SuperAdminComponent {  

  menuItems = [
    { title: 'Home', icon: 'home-outline', link: '/' },
    { title: 'Admins', icon: 'person-outline', link: '/super-admin/admins-list' }
  ];
}
