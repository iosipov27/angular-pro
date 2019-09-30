import { Component } from '@angular/core';

import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),
    stock: this.fb.array([
    ])
  });

  createStock(stock: any = {}) {
    return this.fb.group({
      product_id: stock.product_id || '',
      quantity: stock.quantity || 10
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

  constructor(private fb: FormBuilder) {

  }
}
