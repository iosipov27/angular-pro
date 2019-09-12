import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'auth-message',
  template: `<div>You will be loged for {{ days }} hours</div>`,
})
export class AuthMessage {

  public days: number = 7;

}
