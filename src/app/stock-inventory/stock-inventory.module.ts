import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockInventoryComponent } from './containers/stock-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';
import  { StockBranchComponent, StockProductsComponent, StockSelectorComponent } from './components/index';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent, StockProductsComponent, StockSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [StockInventoryComponent, StockBranchComponent, StockProductsComponent, StockSelectorComponent],
  providers: [],
})
export class StockInventoryModule { }
