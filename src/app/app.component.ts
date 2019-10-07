import { Component, Input, EventEmitter, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';
import { MyFormComponent } from './components/my-form/my-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  onActivate(ev) {
    console.log('On activate', ev);
  }

  onDeactivate(ev) {
    console.log('On deactivate', ev);
  }
}
