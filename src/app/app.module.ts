import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { NebulerModule } from './shared/nebuler.module';
import { HomeComponent } from './home/home.component';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModule } from './auth/auth.module';
import { routes } from '@nebular/auth';
import { withHashLocation } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AdminModule,
    SuperAdminModule,
    NebulerModule,
    AuthModule,
    HomeComponent,
  ],
  providers: [provideAnimations(),provideAnimationsAsync(),
    provideNoopAnimations(),{provide: LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
