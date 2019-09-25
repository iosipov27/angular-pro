import { Directive, HostListener, HostBinding } from '@angular/core';



@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {

  @HostBinding('style.border') border: string;

  @HostListener('input', ['$event']) onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');

    if (trimmed.length > 10) {
      trimmed = trimmed.substr(0, 10);
      this.border = '2px solid red'
    } else {
      this.border = '';
    }

    input.value = trimmed;
  }


}
