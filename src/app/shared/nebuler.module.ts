import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbSelectModule, NbSidebarModule, NbSpinnerModule, NbTagModule, NbThemeModule, NbToastrModule, NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbTagModule,
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
  ]
})
export class NebulerModule { }
