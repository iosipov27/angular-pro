import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockInventoryComponent } from './stock-inventory/containers/stock-inventory.component';
import { StockMessageComponent } from './stock-inventory/containers/stock-message/stock-message.component';
import { ProductResolver } from './stock-inventory/containers/stock-inventory.resolve';
import { StockMessageResolver } from './stock-inventory/containers/stock-message/stock-message.resolver';

const routes: Routes = [
  {
    path: 'folder/:name',
    component: StockInventoryComponent,
    resolve: {
      products: ProductResolver
    }
  },
  {
    path: 'message/:id',
    component: StockMessageComponent,
    outlet: 'pane',
    resolve: {
      message: StockMessageResolver
     }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
