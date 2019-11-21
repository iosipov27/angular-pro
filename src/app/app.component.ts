import { Component } from '@angular/core';

import { merge, Observable, Subject, interval, NEVER, } from 'rxjs';
import { mapTo, switchMap, scan, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  butt1$: Subject<any> = new Subject();
  butt2$: Subject<any> = new Subject();


  counterState$: Observable<any> = merge(
    this.butt1$,
    this.butt2$
  )


  constructor() {
    const comands$ = this.counterState$.pipe(
      switchMap(isTicking => {
        return (isTicking) ? interval(100) : NEVER
      }),
      scan(acc => ++acc),
      shareReplay(1));

    comands$.subscribe(console.log);
  }

  run() {
    this.butt1$.next(true);
  }

  stop() {
    this.butt2$.next(false);
  }
}
