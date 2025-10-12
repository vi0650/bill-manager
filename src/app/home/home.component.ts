import { Component } from '@angular/core';
import { NebulerModule } from '../shared/nebuler.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NebulerModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
