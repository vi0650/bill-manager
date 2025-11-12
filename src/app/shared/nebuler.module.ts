import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAuthModule } from '@nebular/auth'
import { NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbSearchModule, NbSelectModule, NbSidebarModule, NbSpinnerModule, NbTagModule, NbThemeModule, NbToastrModule, NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbAuthModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbTagModule,
    NbSearchModule
  ],
  exports: [
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule,
    NbMenuModule,
    NbActionsModule,
    NbCardModule,
    NbUserModule,
    NbContextMenuModule,
    NbSelectModule,
    NbInputModule,
    NbEvaIconsModule,
    NbListModule,
    NbSpinnerModule,
    NbDatepickerModule,
    NbTagModule,
    NbFormFieldModule,
    NbAuthModule,
    NbSearchModule
  ]
})
export class NebulerModule { }
