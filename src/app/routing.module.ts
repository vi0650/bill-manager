import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withHashLocation } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'super-admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./super-admin/super-admin.module')
      .then(m => m.SuperAdminModule),
    data: { role: 'SuperAdmin' }
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
    data: { role: 'Admin' }
  },
];
bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routes,withHashLocation())
  ]
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }