import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrls: ['./remember.component.scss']
})
export class RememberComponent implements OnInit {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onChecked(val: boolean) {
    this.checked.emit(val);
  }

}
