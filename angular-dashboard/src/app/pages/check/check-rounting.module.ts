import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckComponent } from './check.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { InventoryComponent } from './inventory/inventory.component';


const routes: Routes = [
    {
      path: '',
      component: CheckComponent,
      children: [
        {
          path: 'catalogue',
          component: CatalogueComponent,
        },
        {
            path: 'inventory',
            component: InventoryComponent,
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
  export class CheckRoutingModule {
  }
  