import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReportComponent } from './report.component';


const routes: Routes = [
    {
      path: '',
      component: ReportComponent,
      children: [
        {
          path: 'orders',
          component: OrdersComponent,
        },
        {
          path: 'invoice',
          component: InvoiceComponent,
        }
      ],
    },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule,
    ],
  })
  export class ReportRoutingModule {
  }
  