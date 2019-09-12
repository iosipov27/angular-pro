import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  createUser(user) {
    console.log('create user', user);
  }

  loginUser(user) {
    console.log('login user', user);
  }

}
