import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSignedIn$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isSignedIn$ = this.authService.isSignedIn$;
    this.authService.checkForSignedIn().subscribe();
  }
}
