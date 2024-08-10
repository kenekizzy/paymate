import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  standalone: true
})
export class PasswordMatchDirective implements Validator {
  @Input('appPasswordMatch') matchTo!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const controlToMatch = control.parent?.get(this.matchTo);

    if (controlToMatch && controlToMatch.value !== control.value) {
      return { passwordMismatch: true };
    }

    return null;
  }

}
