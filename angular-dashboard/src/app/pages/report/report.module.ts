import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrdersComponent, InvoiceComponent, ReportComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class ReportModule { }
