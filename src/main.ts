import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

(window as any).nebular_used = true;
(window as any).eva_icons_used = true;
(window as any).using_auth_module = 'NebularAuth';