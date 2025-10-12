import { Component, Input } from '@angular/core';
import { Admins } from '../core/models/admin.model';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private sidebarService: NbSidebarService) {}

  @Input() AdminList: Admins[] = []

  menuItems =[
    { title: 'Invoices', icon: 'file-add-outline', link: 'Invoices' },
    { title: 'Products', icon: 'cube', link: 'products' },
    { title: 'Profile', icon: 'person-done', link: 'Profile' },
  ];

  toggle() {
    this.sidebarService.toggle(true, 'super-sidebar');
    return false;
  }
}
