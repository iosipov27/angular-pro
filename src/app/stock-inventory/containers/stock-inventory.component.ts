import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['./stock-inventory.component.scss'],
  template: `<div class="stock-inventory">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <stock-branch [parent]="form"></stock-branch>
 
      <div class="form-group">
        <stock-selector
          [products]="products"
          (added)="onAdded($event)"
          [parent]="form">
        </stock-selector>
      </div>

      <div class="form-group">
        <stock-products
          (onRemove)="onProductRemove($event)"
          [parent]="form">
        </stock-products>   
      </div>

      <div class="stock-inventory__buttons">
        <button type="submit" [disabled]="form.invalid" class="btn btn-primary">Submit</button>
      </div>

      <pre>
        {{ form.value | json }}
      </pre>

    </form>
  </div>`
})
export class StockInventoryComponent implements OnInit {

  products: Product[] = [
    { id: 4, name: 'Extra', quantity: 3 },
    { id: 42, name: 'Extra Gun', quantity: 454 },
    { id: 34, name: 'Extra Puma', quantity: 90 },
    { id: 44, name: 'Extra Super', quantity: 425 }
  ];

  form = this.fb.group({
    store: this.fb.group({
      branch: ['', Validators.required],
      code:  ['', Validators.required]
    }),
    selector: this.createStock({}),
    stock: this.fb.array([
    ])
  });

  ngOnInit(): void {
    this.form.get('stock').valueChanges.subscribe(data => {
      console.log(data);
    })
  }

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
