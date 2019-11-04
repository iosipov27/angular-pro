import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './services/products.service';

import { StockInventoryModule } from './stock-inventory/stock-inventory.module';
// import { DashboardModule } from './dashboard/dashboard.module';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [{
  path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    StockInventoryModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
