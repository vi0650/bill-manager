import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'super-admin',
  standalone: false,
  templateUrl: './super-admin.component.html',
  styleUrl: './super-admin.component.css'
})
export class SuperAdminComponent {  

  constructor(private sidebarService: NbSidebarService) {}

  menuItems:NbMenuItem[] = [
    { title: 'Home', icon: 'home-outline', link: '/' },
    { title: 'Admins', icon: 'person-outline', link: '/super-admin/admins-list' }
  ];

  toggle() {
    this.sidebarService.toggle(true, 'super-sidebar');
    return false;
  }
}
