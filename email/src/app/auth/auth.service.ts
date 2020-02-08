import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://api.angular-email.com';

  // $ at end means observable-like thing
  isSignedIn$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  checkForUniqueUsername(username: string) {
    return this.http.post<{ available: boolean }>(
      this.baseUrl + '/auth/username',
      { username }
    );
  }

  checkForSignedIn() {
    return this.http.get<any>(this.baseUrl + '/auth/signedin');
  }

  signup(credentials: Credentials) {
    return this.http
      .post<SignupResponse>(this.baseUrl + '/auth/signup', credentials)
      .pipe(tap(_ => this.isSignedIn$.next(true)));
  }
}

interface Credentials {
  username: string;
  password: string;
  passwordConfirmatin: string;
}

interface SignupResponse {
  username: string;
}
