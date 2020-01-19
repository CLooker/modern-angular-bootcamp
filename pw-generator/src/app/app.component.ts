import { Component } from '@angular/core';
import { pipe } from './utils';

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
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.useLetters) validChars += letters;
    if (this.useNumbers) validChars += numbers;
    if (this.useSymbols) validChars += symbols;

    const password = Array.from({ length: this.length }).reduce(accum => {
      const randomIndex = pipe(
        _ => Math.random() * validChars.length,
        Math.floor
      )();
      const next = validChars.charAt(randomIndex);
      return accum + next;
    }, '');
    this.password = password as string;
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
