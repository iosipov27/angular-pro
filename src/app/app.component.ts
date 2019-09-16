import { Component, Input, EventEmitter, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import  { MyFormComponent } from './components/my-form/my-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  @ViewChild ('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  component: ComponentRef<MyFormComponent>;
  component2: ComponentRef<MyFormComponent>;

  constructor(private resolver: ComponentFactoryResolver ) {

  }

  ngAfterContentInit(): void {
    let authFormFactory = this.resolver.resolveComponentFactory(MyFormComponent);
    this.component = this.entry.createComponent(authFormFactory);
    this.component2 = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = 'My New Title';
    this.component.instance.submited.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component2.hostView, 1);
  }

  createUser(user) {
    console.log('create user', user);
  }

  loginUser(user) {
    console.log('login user', user);
  }

  onChecked(val: boolean) {
    console.log('checked', val);
  }

}
