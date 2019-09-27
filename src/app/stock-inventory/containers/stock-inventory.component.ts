import { Component, Input, EventEmitter, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';

import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['./stock-inventory.component.scss'],
  template: `<div class="stock-inventory">
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div formGroupName="store">
        <input formControlName="branch" type="text" placeholder="Branch ID"/>
        <input formControlName="code" type="text" placeholder="Code"/>
      </div>

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


  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('23'),
      code: new FormControl('2323')
    })
  })


  onSubmit() {
    console.log(this.form.value);
  }

  constructor() {

  }
}
