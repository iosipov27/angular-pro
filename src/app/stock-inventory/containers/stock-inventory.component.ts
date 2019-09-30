import { Component, Input, EventEmitter, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';

import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Product } from '../models';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['./stock-inventory.component.scss'],
  template: `<div class="stock-inventory">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <stock-branch [parent]="form"></stock-branch>

      <stock-selector
        [products]="products"
        (added)="onAdded($event)"
        [parent]="form">
      </stock-selector>

      <stock-products
        (onRemove)="onProductRemove($event)"
        [parent]="form">
      </stock-products>

      <div class="stock-inventory__buttons">
        <button type="submit" [disabled]="form.invalid">Submit</button>
      </div>

      <pre>
        {{ form.value | json }}
      </pre>

    </form>
  </div>`
})
export class StockInventoryComponent {

  products: Product[] = [
    { id: 4, name: 'Extra', quantity: 45 },
    { id: 42, name: 'Extra Gun', quantity: 454 },
    { id: 34, name: 'Extra Puma', quantity: 43 },
    { id: 44, name: 'Extra Super', quantity: 425 }
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl(''),
      code: new FormControl('')
    }),
    selector: this.createStock({}),
    stock: new FormArray([
    ])
  });

  createStock(stock: any = {}) {
    return new FormGroup({
      product_id: new FormControl(stock.product_id || ''),
      quantity: new FormControl(stock.quantity || 10)
    })
  }

  onAdded(product) {
    let control = this.form.get('stock') as FormArray;
    control.push(this.createStock(product));
  }

  onProductRemove({ product, index }: { product: FormGroup, index: number }) {
    console.log(product);
    let control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }


  onSubmit() {
    console.log(this.form.value);
  }

  constructor() {

  }
}
