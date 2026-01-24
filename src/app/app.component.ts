import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor(){ }
  // currentRoute = '';

  // constructor(
  //   private themeService: NbThemeService,
  //   private router: Router
  // ) {
  //   this.themeService.changeTheme('default');
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe((event: NavigationEnd) => {
  //       this.currentRoute = event.url;
  //     });
  // }

  // isRouteActive(): boolean {
  //   return this.currentRoute !== '/' && this.currentRoute !== '';
  // }
}