import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['./stock-inventory.component.scss'],
  templateUrl: './stock-inventory.component.html',
})
export class StockInventoryComponent {

  constructor(private router: Router) {
    this.router.events.pipe(filter(item => item instanceof NavigationEnd))
      .subscribe(ev => {
        console.log(ev);
      })
  }
}
