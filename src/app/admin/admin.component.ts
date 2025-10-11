import { Component, Input } from '@angular/core';
import { Admins } from '../core/models/admin.model';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  @Input() AdminList: Admins[] = []

  menuItems =[
    { title: 'Bills', icon: 'file-add-outline', link: 'bills' },
    { title: 'Products', icon: 'cube', link: 'products' },
    { title: 'Profile', icon: 'person-done', link: 'Profile' },
  ];
}
