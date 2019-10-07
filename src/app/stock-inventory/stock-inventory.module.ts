import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockInventoryComponent } from './containers/stock-inventory.component';
import { StockTrashComponent } from './containers/stock-trash.component';
import { ReactiveFormsModule } from '@angular/forms';
import  { StockBranchComponent, StockProductsComponent, StockSelectorComponent, StockCounterComponent } from './components/index';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockTrashComponent,
    StockBranchComponent, 
    StockProductsComponent, 
    StockSelectorComponent, 
    StockCounterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StockInventoryComponent, 
    StockBranchComponent, 
    StockProductsComponent, 
    StockSelectorComponent,
    StockCounterComponent
  ],
  providers: [],
})
export class StockInventoryModule { }
