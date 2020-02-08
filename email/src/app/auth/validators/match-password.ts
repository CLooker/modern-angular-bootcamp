import { Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  validate(formGroup: FormGroup): ValidationErrors {
    const { password, passwordConfirmation } = formGroup.value;
    return password === passwordConfirmation
      ? null
      : { passwordMismatch: true };
  }
}
