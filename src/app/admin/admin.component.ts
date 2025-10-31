import { Component, Input } from '@angular/core';
import { Admins } from '../core/models/admin.model';
import { NbSidebarService } from '@nebular/theme';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  loading: boolean = false;

  private navigationComplete: boolean = true;
  private loadtimePassed:boolean = true;

  constructor(private sidebarService: NbSidebarService, private router: Router) {
    this.getData()
  }

  ngOnInit(): void {
    this.routerSpinner()
  }

  menuItems = [
    { title: 'Invoices', icon: 'file-add-outline', link: 'invoices' },
    { title: 'Products', icon: 'cube', link: 'products' },
    { title: 'Profile', icon: 'settings-2-outline', link: 'profile' },
  ];

  @Input() AdminList: Admins[] = []
  
  getData() {
    this.AdminList = localStorage.getItem('Admins') ? JSON.parse(localStorage.getItem('Admins')!) : [];
    console.log(this.AdminList);
  }

  toggle() {
    this.sidebarService.toggle(true, 'super-sidebar');
    return false;
  }

  routerSpinner() {
    this.router.events.subscribe((Event) => {
      if (Event instanceof NavigationStart) {
        setTimeout(() => {
          this.loading = true;
        },2000);
      }
      if (Event instanceof NavigationCancel || Event instanceof NavigationEnd || Event instanceof NavigationError){
        this.loading = false
      }
    })
  }
}
