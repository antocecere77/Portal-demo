import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { CheckModule } from './check/check.module';
import { ReportModule } from './report/report.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    CheckModule,
    ReportModule,
    AdminModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
