import { Component, Input, EventEmitter, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'stock-branch',
  template: `<div [formGroup]="parent">
    <div formGroupName="store">
      <input formControlName="branch" type="text" placeholder="Branch ID"/>
      <input formControlName="code" type="text" placeholder="Code"/>
    </div>
  </div>`,
  styleUrls: ['./stock-branch.component.scss']
})
export class StockBranchComponent {
  @Input() parent: FormGroup;
}
