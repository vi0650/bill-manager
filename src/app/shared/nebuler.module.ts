import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbSelectModule, NbSidebarModule, NbSpinnerModule, NbThemeModule, NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbEvaIconsModule
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
    NbSpinnerModule
  ]
})
export class NebulerModule { }
