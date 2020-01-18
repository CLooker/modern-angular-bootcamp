import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length: number;
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onButtonClick() {
    this.password = 'my password!';
  }

  toggleUseLetters() {
    this.useLetters = !this.useLetters;
  }

  toggleUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  toggleUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  updateLength(value: string) {
    let length = +value;
    if (!Number.isNaN(length)) this.length = length;
  }
}
