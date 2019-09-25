import { Directive, HostListener, HostBinding, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {

    tooltipElement = document.createElement('div');
    isVisible: boolean = false;

    constructor(private element: ElementRef) {}

    @Input() set tooltip(val: string) {
        this.tooltipElement.textContent = val; 
    }

    hide() {
        this.tooltipElement.classList.add('hidden');
    }

    show() {
        this.tooltipElement.classList.remove('hidden');
    }

    ngOnInit(): void {
        this.tooltipElement.className = 'my-tooltip';
        this.element.nativeElement.style.position = "relative";
        this.element.nativeElement.appendChild(this.tooltipElement);
        this.element.nativeElement.classList.add('element-container');
        this.hide();
    }

}
