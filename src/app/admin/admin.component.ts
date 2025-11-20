import { Component, Input } from '@angular/core';
import { Admins } from '../core/models/admin.model';
import { NbMediaBreakpointsService, NbSidebarService, NbMenuService } from '@nebular/theme';
import { Subject,takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  private destroy$ = new Subject<void>();
  loading: boolean = false;

  // private navigationComplete: boolean = true;
  // private loadtimePassed: boolean = true;

  constructor(private sidebarService: NbSidebarService, private breakpointService: NbMediaBreakpointsService, private menuService: NbMenuService, private route: Router) { 

  }

  ngOnInit(): void {
    const { lg } = this.breakpointService.getBreakpointsMap();

    // When menu item is clicked, close sidebar only on mobile
    this.menuService.onItemClick()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (window.innerWidth < lg) {
          this.sidebarService.collapse('super-sidebar'); // sidebar tag
        }
      });
  }

  menuItems = [
    // { title: 'Home', icon: 'home-outline', link: 'home' },
    { title: 'Invoices', icon: 'file-add-outline', link: 'invoices' },
    { title: 'Products', icon: 'cube', link: 'products' },
    { title: 'Profile', icon: 'settings-2-outline', link: 'profile' },
  ];

  @Input() AdminList: Admins[] = []

  // getData() {
  //   this.AdminList = localStorage.getItem('Admins') ? JSON.parse(localStorage.getItem('Admins')!) : [];
  //   console.log(this.AdminList);
  // }

  toggle() {
    this.sidebarService.toggle(true, 'super-sidebar');
    return false;
  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.route.navigate(['/login']);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // routerSpinner() {
  //   this.router.events.subscribe((Event) => {
  //     if (Event instanceof NavigationStart) {
  //       setTimeout(() => {
  //         this.loading = true;
  //       },2000);
  //     }
  //     if (Event instanceof NavigationCancel || Event instanceof NavigationEnd || Event instanceof NavigationError){
  //       this.loading = false
  //     }
  //   })
  //   console.log(this.loading,"navigation not started");

  // }

}
