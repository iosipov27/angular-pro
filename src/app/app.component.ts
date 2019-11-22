import { Component } from '@angular/core';

import { merge, Observable, Subject, interval, NEVER, } from 'rxjs';
import { mapTo, switchMap, scan, shareReplay, startWith, map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  butt1$: Subject<any> = new Subject();
  butt2$: Subject<any> = new Subject();
  butt3$: Subject<any> = new Subject();
  butt4$: Subject<any> = new Subject();




  counterState$: Observable<any> = merge(
    this.butt1$.pipe(mapTo({ isTicking: true })),
    this.butt2$.pipe(mapTo({ isTicking: false })),
    this.butt3$.pipe(mapTo({ isKeking: 10 })),
    this.butt4$.pipe(mapTo({ isKeking: 101 })),
  )

  constructor() {

    interface Count {
      isTicking: boolean,
      isKeking: number,
    }

    const counterStateKeys = {
      isTicking: 'isTicking',
      isKeking: 'isKeking'
    }

    const initialState: Count = {
      isTicking: false,
      isKeking: 0
    }

    const comands$ =
      this.counterState$.pipe(
        startWith(initialState),
        scan((state, command) => ({ ...state, ...command })),)

    const counts$ = comands$.pipe(pluck<Count, number>(counterStateKeys.isKeking));
    const isSounts$ = comands$.pipe(pluck<Count, boolean>(counterStateKeys.isTicking));

    isSounts$.subscribe(console.log);
    counts$.subscribe(console.log);
  }

  run() {
    this.butt1$.next(true);
  }

  stop() {
    this.butt2$.next(false);
  }

  kek() {
    this.butt3$.next(true);
  }

  lol() {
    this.butt4$.next(true);
  }
}
