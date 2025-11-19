import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'super-admin',
  standalone: false,
  templateUrl: './super-admin.component.html',
  styleUrl: './super-admin.component.css'
})
export class SuperAdminComponent {

  constructor(private sidebarService: NbSidebarService,private route:Router) { }

  menuItems: NbMenuItem[] = [
    // { title: 'Home', icon: 'home-outline', link: '/' },
    { title: 'Admins', icon: 'person-outline', link: 'admins-list' }
  ];

  toggle() {
    this.sidebarService.toggle(true, 'super-sidebar');
    return false;
  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.route.navigate(['/login']);
  }

}
