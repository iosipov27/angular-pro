import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockInventoryComponent } from './containers/stock-inventory.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StockInventoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports: [StockInventoryComponent],
  providers: [],
})
export class StockInventoryModule { }
