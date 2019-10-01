import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StockCounterComponent),
    multi: true
}

@Component({
    selector: 'stock-counter',
    styleUrls: ['stock-counter.component.scss'],
    providers: [COUNTER_CONTROL_ACCESSOR],
    template: `
        <div class="row">
            <div class="col-sm-4">
                {{ value }}
            </div>
            <div class="col-sm-8">
                <div class="btn-group btn-group-toggle">
                    <button type="buttom" (click)="increase()" class="btn btn-outline-secondary">+</button>
                    <button type="buttom" (click)="descrease()" class="btn btn-outline-secondary">-</button>
                </div>
            </div>
        </div>

    `
})
export class StockCounterComponent implements ControlValueAccessor {

    writeValue(obj: any): void {
        this.value = obj;
    }
    registerOnChange(fn: any): void {
        this.onModelChange = fn;
    }
    registerOnTouched(fn: any): void {}

    @Input() min: number = 10;
    @Input() max: number = 100;
    @Input() step: number = 10;
    public value: number = 10;
    private onModelChange: Function;
    private onTouch: Function;

    descrease() {
        if (this.value > this.min ) {
            this.value -= this.step;
            this.onModelChange(this.value);
        }
    }

    increase() {
        if (this.value < this.max ) {
            this.value += this.step;
            this.onModelChange(this.value);
        }
    }
}