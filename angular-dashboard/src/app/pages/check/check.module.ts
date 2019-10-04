import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckComponent } from './check.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CheckRoutingModule } from './check-rounting.module';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [CheckComponent, CatalogueComponent, InventoryComponent],
  imports: [
    CommonModule,
    CheckRoutingModule
  ]
})
export class CheckModule { }
