import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { NebulerModule } from './shared/nebuler.module';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModule } from './auth/auth.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminDataService } from './core/services/admin-data.service';

export function initAdmins(adminInit: AdminDataService) {
  return () => adminInit.getAdmin();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AdminModule,
    SuperAdminModule,
    NebulerModule,
    AuthModule,
  ],
  providers: [provideAnimations(), provideAnimationsAsync(), provideNoopAnimations(),
  {provide: LocationStrategy,useClass:HashLocationStrategy},
  {
    provide: APP_INITIALIZER,
    useFactory: initAdmins,
    deps: [AdminDataService],
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
