import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withHashLocation } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'super-admin',
    loadChildren: () => import('./super-admin/super-admin.module')
      .then(m => m.SuperAdminModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
  },
];
// bootstrapApplication(AppComponent,{
//   providers:[
//     provideRouter(routes,withHashLocation())
//   ]
// })

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }