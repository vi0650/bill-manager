import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentRoute = '';

  constructor(
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
    private router: Router
  ) {
    this.themeService.changeTheme('default');

    // Track route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });
  }

  toggle() {
    this.sidebarService.toggle(true, 'super-sidebar');
    return false;
  }

  isRouteActive(): boolean {
    return this.currentRoute !== '/' && this.currentRoute !== '';
  }
}
