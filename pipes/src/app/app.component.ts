import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount: number;
  date: string;
  miles: number;
  name: string;

  onAmountChange(value: string) {
    const amount = +value;
    if (!Number.isNaN(amount)) {
      this.amount = amount;
    }
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onMilesChange(value: string) {
    const miles = +value;
    if (!Number.isNaN(miles)) {
      this.miles = miles;
    }
  }

  onNameChange(value: string) {
    this.name = value;
  }
}
