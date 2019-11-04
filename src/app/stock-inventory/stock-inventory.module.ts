import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockInventoryComponent } from './containers/stock-inventory.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { StockTrashComponent } from './containers/stock-trash/stock-trash.component';
import { StockMessageComponent } from './containers/stock-message/stock-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductResolver } from './containers/stock-inventory.resolve';
import { StockMessageResolver } from './containers/stock-message/stock-message.resolver';
import { Routes, RouterModule } from '@angular/router';

import  { StockBranchComponent, StockProductsComponent, StockSelectorComponent, StockCounterComponent } from './components/index';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockTrashComponent,
    StockMessageComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
    StockCounterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
    StockCounterComponent
  ],
  providers: [
    ProductResolver,
    StockMessageResolver
  ],
})
export class StockInventoryModule { }
