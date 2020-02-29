import { Component } from '@angular/core';

import { merge, Observable, Subject, interval, NEVER, timer, BehaviorSubject, } from 'rxjs';
import { mapTo, switchMap, scan, shareReplay, startWith, map, pluck, distinctUntilChanged, tap, withLatestFrom } from 'rxjs/operators';


interface Count {
  isTicking: boolean,
  isKeking: number,
}

interface countdownState {
  count: number
}


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  private state = new BehaviorSubject({
    enbled: false,
    tooltip: false
  })

  public eventStream$ = this.state.asObservable();

  public update(value: boolean, command: string): void {
    let update = this.state.value;
    if (command === 'enabled') update.enbled = value;
    if (command === 'tooltip') update.tooltip = value;

    this.state.next(update);
  }
}
