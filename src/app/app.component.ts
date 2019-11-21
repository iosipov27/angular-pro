import { Component } from '@angular/core';

import { merge, Observable, Subject, interval, NEVER, } from 'rxjs';
import { mapTo, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  butt1$: Subject<any> = new Subject();
  butt2$: Subject<any> = new Subject();


  constructor() {

    this.butt1$.pipe(switchMap(isTicking => {
      return (isTicking) ? interval(1000) : NEVER
    })).subscribe(data => {
      console.log(data);
    })

  }

  run() {
    this.butt1$.next(true);
  }

  stop() {
    this.butt1$.next(false);
  }
}
