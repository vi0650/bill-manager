import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAccordionModule, NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule, NbDatepicker, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbSelectModule, NbSidebarModule, NbSpinnerModule, NbTagModule, NbThemeModule, NbToastrModule, NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbEvaIconsModule,
    NbTagModule
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
    NbAccordionModule,
    NbTagModule
  ]
})
export class NebulerModule { }
