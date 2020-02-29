import { Component, Input } from '@angular/core';

import { merge, Observable, Subject, interval, NEVER, timer, } from 'rxjs';
import { mapTo, switchMap, scan, shareReplay, startWith, map, pluck, distinctUntilChanged, tap, withLatestFrom } from 'rxjs/operators';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() eventStream: any;

}
