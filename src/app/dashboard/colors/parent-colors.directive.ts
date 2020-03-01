import { Directive } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
  selector: '[colors]'
})
export class ParentColorsDirective {

  private state = new BehaviorSubject({
    color: 'red'
  })

  public eventStream$ = this.state.asObservable();

  public update(color: string): void {
    this.state.next({ color });
  }
}
