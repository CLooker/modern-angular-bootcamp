import { AsyncValidator, FormControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (formControl: FormControl): Observable<ValidationErrors> => {
    return this.authService.checkForUniqueUsername(formControl.value).pipe(
      map(_ => null),
      catchError(err =>
        err.status == 422
          ? of({ usernameInUse: true })
          : of({ httpError: true })
      )
    );
  };
}
