import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'check',
      loadChildren: () => import('./check/check.module')
        .then(m => m.CheckModule),
    },
    {
      path: 'report',
      loadChildren: () => import('./report/report.module')
        .then(m => m.ReportModule),
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
