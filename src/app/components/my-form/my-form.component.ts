import { Component, OnInit, Input, EventEmitter, Output, AfterContentInit, QueryList , ContentChildren } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { RememberComponent } from '../remember/remember.component';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements AfterContentInit {

  @ContentChildren(RememberComponent) remember = new QueryList<RememberComponent>();

  public showMessage: boolean;

  @Output() submited = new EventEmitter();

  constructor() { }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((val: boolean) => this.showMessage = val);
      });
    }
    console.log(this.remember);
  }

  onSubmit(val) {
    this.submited.emit(val);
  }

}
