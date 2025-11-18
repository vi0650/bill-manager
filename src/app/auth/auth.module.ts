import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebulerModule } from '../shared/nebuler.module';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NebulerModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
