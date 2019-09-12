import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent {

  @Output() submited = new EventEmitter();

  constructor() { }

  onSubmit(val) {
    this.submited.emit(val);
  }

}
