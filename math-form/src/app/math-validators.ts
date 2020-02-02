import { AbstractControl } from "@angular/forms";

export class MathValidators {
  static addition(termKeys: string[], sumKey: string) {
    return (form: AbstractControl) => {
      const expectedSum = +form.value[sumKey];
      const actualSum = [...termKeys]
        .map(termKey => +form.value[termKey])
        .reduce((accum, term) => accum + term, 0);
      return expectedSum === actualSum ? null : { addition: true };
    };
  }
}
