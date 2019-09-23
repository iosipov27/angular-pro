import { Directive, HostListener } from '@angular/core';



@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective  {

  @HostListener('input', ['$event']) onKeyDown(event: KeyboardEvent) {
    console.log(event);

    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');

    if (trimmed.length > 10) {
      trimmed =trimmed.substr(0 , 10);
    }

    input.value = trimmed;
  }


}
