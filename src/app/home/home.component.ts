import { Component } from '@angular/core';
import { Admins } from '../core/models/admin.model';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  menuItems = [
    { title: 'Home', link: '/' },
    { title: 'Login', link: '/login' },
  ];

  constructor(private nbSidebar: NbSidebarService) { }

  adminId: string = '';
  userName: string = '';
  password: any = '';
  adminData: Admins[] = [];

  login() {
    console.log('under construction');
  }

  toggle() {
    this.nbSidebar.toggle(false, 'home-sidebar')
    return true;
  }
}
