import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/products.service';

import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['./stock-inventory.component.scss'],
  templateUrl: './stock-inventory.component.html',
})
export class StockInventoryComponent {

  products: Observable<any> = this.router.data.pipe(pluck('products'));

  constructor(private router: ActivatedRoute) {

  }
}
