import { Component, Input, EventEmitter, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models';



@Component({
  selector: 'stock-selector',
  template: `
  <div [formGroup]="parent">

    <div formGroupName="selector">
      <div class="row">
        <div class="col-sm-6">
          <select formControlName="product_id" class="form-control">
            <option [value]="">Select product</option>
            <option *ngFor="let item of products" [value]="item.id">
            {{ item.name }}
            </option>
          </select>
        </div>
        <div class="col-sm-3">
          <stock-counter [min]="20" [max]="1000" [step]="50" formControlName="quantity"></stock-counter>
        </div>
        <div class="col-sm-3">
          <button type="button" (click)="addProduct()" class="btn btn-primary">Add new</button>
        </div>
      </div>
      
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
