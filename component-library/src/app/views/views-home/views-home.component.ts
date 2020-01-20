import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  items = [
    {
      description: 'This is a fantastic couch to sit on',
      image: '/assets/images/couch.jpeg',
      title: 'Couch'
    },
    {
      description: 'This is a great dreser to put stuff in',
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser'
    }
  ];

  stats = [
    { label: 'Users', value: 22 },
    { label: 'Revenue', value: 900 },
    { label: 'Reviews', value: 50 }
  ];

  constructor() {}

  ngOnInit() {}
}
