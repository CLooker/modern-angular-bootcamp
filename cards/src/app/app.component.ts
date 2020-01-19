import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      content: 'I saw this awesome tree today!',
      imageUrl: 'assets/tree.jpeg',
      title: 'Neat Tree',
      userName: 'nature'
    },
    {
      content: 'Here is a picture of a snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
      title: 'Snowy Mountain',
      userName: 'mountainlover'
    },
    {
      content: 'I did some biking today',
      imageUrl: 'assets/biking.jpeg',
      title: 'Mountain Biking',
      userName: 'biking12222'
    }
  ];
}
