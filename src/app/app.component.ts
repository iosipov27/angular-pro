import { Component } from '@angular/core';

import { merge, Observable, Subject, interval, NEVER, } from 'rxjs';
import { mapTo, switchMap, scan, shareReplay, startWith, map } from 'rxjs/operators';

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
    const initialState = {
      isTicking: false,
      isKeking: 0
    }

    const comands$ =
      this.counterState$.pipe(
        startWith(initialState),
        scan((state, command) => ({ ...state, ...command })),

      )
    comands$.pipe(map(state => state.isKeking))
      .subscribe(console.log);
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
