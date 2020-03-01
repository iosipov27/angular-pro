import { Component, Input, OnInit } from '@angular/core';

import { merge, Observable, Subject, interval, NEVER, timer, } from 'rxjs';
import { mapTo, switchMap, scan, shareReplay, startWith, map, pluck, distinctUntilChanged, tap, withLatestFrom } from 'rxjs/operators';
import { ParentColorsDirective } from '../parent-colors.directive';



@Component({
  selector: 'app-child-color',
  templateUrl: './child-color.component.html',
  styleUrls: ['./child-color.component.scss']
})
export class ChildColorComponent implements OnInit {

  colors$;

  ngOnInit(): void {
    this.colors$ = this.directive.eventStream$;
  }

  constructor(private directive: ParentColorsDirective) {
  }

  updateColor(color: string) {
    this.directive.update(color);
  }

}
