import { Component, ViewChild, EventEmitter, Output, AfterContentInit, AfterViewInit, QueryList , ContentChildren, ElementRef } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { RememberComponent } from '../remember/remember.component';
import { AuthMessage } from '../auth-message.component';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements AfterContentInit, AfterViewInit {

  title: string = 'Login Form!';

  @Output() submited = new EventEmitter();

  constructor() { }

  ngAfterViewInit(): void {

  }

  ngAfterContentInit(): void {
  }

  onSubmit(val) {
    this.submited.emit(val);
  }

}
