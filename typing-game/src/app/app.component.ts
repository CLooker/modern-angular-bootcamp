import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enteredText = '';
  randomText = lorem.sentence();

  constructor() {}

  ngOnInit() {}

  getClass(randomChar: string, enteredChar: string | undefined): string {
    switch (true) {
      case !Boolean(enteredChar):
        return 'pending';
      case randomChar === enteredChar:
        return 'correct';
      default:
        return 'incorrect';
    }
  }

  onInput(value): void {
    this.enteredText = value;
  }
}
