import { Component, ViewChild, EventEmitter, Output, AfterContentInit, AfterViewInit, QueryList , ContentChildren } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { RememberComponent } from '../remember/remember.component';
import { AuthMessage } from '../auth-message.component';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements AfterContentInit, AfterViewInit {

  @ViewChild(AuthMessage) message = AuthMessage;

  @ContentChildren(RememberComponent) remember = new QueryList<RememberComponent>();

  public showMessage: boolean;

  @Output() submited = new EventEmitter();

  constructor() { }

  ngAfterViewInit(): void {

  }

  ngAfterContentInit(): void {
    if (this.message) {
      this.message.days = 12;
    }


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
