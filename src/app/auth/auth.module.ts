import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NebulerModule } from '../shared/nebuler.module';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NebulerModule,
    NbAuthModule.forRoot({
      strategies:[
        NbPasswordAuthStrategy.setup({
          name:'username',
        })
      ],
      forms:{}
    })
  ]
})
export class AuthModule { }
