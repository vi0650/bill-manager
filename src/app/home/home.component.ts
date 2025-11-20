import { Component } from '@angular/core';
import { Admins } from '../core/models/admin.model';
import { NbSidebarService, NbToast, NbToastrService } from '@nebular/theme';

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

  constructor(private nbSidebar: NbSidebarService,private nbTostr:NbToastrService) { }

  toggle() {
    this.nbSidebar.toggle(false, 'home-sidebar')
    return true;
  }

  build(){
    this.nbTostr.info('Page does not exist!!','INFO')
  }
}
