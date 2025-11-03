import { Component } from '@angular/core';
import { NebulerModule } from '../shared/nebuler.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Admins } from '../core/models/admin.model';

@Component({
  selector: 'app-home',
  imports: [NebulerModule,RouterModule,FormsModule],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  adminId:string='';
  userName:string='';
  password:any='';
  adminData:Admins[]=[];

  login(){
    if(this.adminId && this.userName && this.password){
      this.adminData.find
    }
  }
}
