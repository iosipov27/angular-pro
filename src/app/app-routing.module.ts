import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockInventoryComponent } from './stock-inventory/containers/stock-inventory.component';
import { StockTrashComponent } from './stock-inventory/containers/stock-trash.component';

const routes: Routes = [
  { path: 'folder/inbox', component: StockInventoryComponent },
  { path: 'folder/trash', component: StockTrashComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
