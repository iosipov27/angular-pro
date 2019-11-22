import { Component } from '@angular/core';

import { merge, Observable, Subject, interval, NEVER, } from 'rxjs';
import { mapTo, switchMap, scan, shareReplay, startWith, map, pluck, distinctUntilChanged } from 'rxjs/operators';


interface Count {
  isTicking: boolean,
  isKeking: number,
}

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


    const counts$ = this.queryState(counterStateKeys.isTicking)(comands$);
    const isSounts$ = this.queryState(counterStateKeys.isKeking)(comands$);

    isSounts$.pipe(map(data => data + ' MB')).subscribe(console.log);
    counts$.subscribe(console.log);
  }

  queryState(name) {
    return (obs: Observable<any>) => {
      return obs.pipe(pluck<Count, any>(name), distinctUntilChanged())
    }
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
