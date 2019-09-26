import { Component, Input, EventEmitter, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';
import { MyFormComponent } from './components/my-form/my-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items = [
    { name: 'Illia', age: 13, location: 'New York' },
    { name: 'Lilia', age: 23, location: 'Super York' },
    { name: 'Kek', age: 23, location: 'Kekork' },
  ]


}
