import { Component, Input, EventEmitter, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef, Output } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';



@Component({
  selector: 'stock-products',
  template: `
  <div [formGroup]="parent">
    <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index" class="form-group">
          <div [formGroupName]="i" class="row">
            <div class="col-sm-3">
              {{ item.value.product_id }}
            </div>
            <div class="col-sm-3">
              <input type="number" formControlName="quantity" class="form-control"/>
            </div>
            <div class="col-sm-6">
              <button type="button" (click)="removeProduct(item.value, i)" class="btn btn-outline-secondary">x</button>
            </div>
          </div>
        </div>
    </div>
  </div>`,
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent {
  @Input() parent: FormGroup;
  @Output() onRemove = new EventEmitter<any>();

  get stocks() {
    return (this.parent.get('stock') as FormArray ).controls;
  }

  removeProduct(product: any, index: number) {
    this.onRemove.emit({ product, index });
  }
}
