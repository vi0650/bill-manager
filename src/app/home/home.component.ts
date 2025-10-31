import { Component } from '@angular/core';
import { NebulerModule } from '../shared/nebuler.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [NebulerModule,RouterModule,FormsModule],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  login(){

  }

  selectRole:string='';

}
