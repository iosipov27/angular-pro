import { Component, Input, EventEmitter, ViewChild, ViewContainerRef, AfterContentInit, ComponentFactoryResolver, ComponentRef, TemplateRef } from '@angular/core';
import { MyFormComponent } from './components/my-form/my-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('myContent') templ: TemplateRef<any>;

  public ctx = {
    $implicit: 'Illia',
    location: 'Kyiv, Ukraine'
  };

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(this.templ, {
      $implicit: 'Illia',
      location: 'Kyiv, Ukraine'
    });

  }


}
