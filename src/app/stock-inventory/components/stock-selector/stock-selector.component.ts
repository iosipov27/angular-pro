import { Component, Input, EventEmitter, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models';



@Component({
  selector: 'stock-selector',
  template: `
  <div [formGroup]="parent">
    <div formGroupName="selector">
      <select formControlName="product_id">
      <option [value]="">Select product</option>
        <option *ngFor="let item of products" [value]="item.id">
          {{ item.name }}
        </option>
      </select>
      <input type="number" min="3" max="1000" formControlName="quantity"/>
      <button type="button" (click)="addProduct()">Add new</button>
    </div>
  </div>
  `,
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent {
  @Input() parent: FormGroup;
  @Input() products: Product[];
  @Output() added = new EventEmitter<any>();

  addProduct() {
    this.added.emit(this.parent.get('selector').value);
  }
}
