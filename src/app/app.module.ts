import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { NebulerModule } from './shared/nebuler.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AdminModule,
    SuperAdminModule,
    NebulerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
