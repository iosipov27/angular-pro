import { Directive, Input, ViewRef, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor][myForOf]'
})
export class MyForDirective {

  @Input() set myForOf(options) {
    options.forEach((item, ind) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index: ind
      })
    });

  }

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) {

  }
}
