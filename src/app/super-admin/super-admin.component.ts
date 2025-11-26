import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbMediaBreakpointsService, NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { AuthService } from '../core/services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'super-admin',
  standalone: false,
  templateUrl: './super-admin.component.html',
  styleUrl: './super-admin.component.css'
})
export class SuperAdminComponent {

  constructor(private sidebarService: NbSidebarService, private breakpointService: NbMediaBreakpointsService, private menuService: NbMenuService, private route: Router, private auth: AuthService) { }

  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    const { lg } = this.breakpointService.getBreakpointsMap();
    this.menuService.onItemClick()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (window.innerWidth < lg) {
          this.sidebarService.collapse('super-sidebar'); // sidebar tag
        }
      });
  }

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
