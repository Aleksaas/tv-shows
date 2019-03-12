import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[ratingRange]',
    providers: [{ provide: NG_VALIDATORS, useExisting: RatingRangeValidatorDirective, multi: true }]
})
export class RatingRangeValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } {

        const rangeOk = control.value >= 0 && control.value <= 10;

        return  rangeOk ? null : { "ratingRange" : { value: control.value } }
    }
}

// This can be made as generic number range validator, but not priority now
