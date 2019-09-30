import { Component, Input, EventEmitter, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';



@Component({
  selector: 'stock-products',
  template: `<div [formGroup]="parent">
    <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index">
          <div [formGroupName]="i">
            {{ item.value.product_id }}
            <input type="number" formControlName="quantity" />
            <button type="button">Remove</button>
          </div>
        </div>
    </div>

  </div>`,
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent {
  @Input() parent: FormGroup;


  get stocks() {
    return (this.parent.get('stock') as FormArray ).controls;
  }
}