import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as get from 'lodash.get';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5)
    ]),
    securityCode: new FormControl('')
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('form was submitted');
  }
}
