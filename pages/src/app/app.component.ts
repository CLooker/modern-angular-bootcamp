import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentImage = 0;
  offset = 5;
  images = [
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Chilling on Mars',
      url:
        'https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Aphex Twin is dope',
      url:
        'https://images.unsplash.com/photo-1543940610-6c1cb4aa5c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Work view',
      url:
        'https://images.unsplash.com/reserve/GtJALYqlRDiojsfBMQRa_373A1071.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Chilling on Mars',
      url:
        'https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Aphex Twin is dope',
      url:
        'https://images.unsplash.com/photo-1543940610-6c1cb4aa5c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Work view',
      url:
        'https://images.unsplash.com/reserve/GtJALYqlRDiojsfBMQRa_373A1071.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Chilling on Mars',
      url:
        'https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Aphex Twin is dope',
      url:
        'https://images.unsplash.com/photo-1543940610-6c1cb4aa5c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Work view',
      url:
        'https://images.unsplash.com/reserve/GtJALYqlRDiojsfBMQRa_373A1071.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Chilling on Mars',
      url:
        'https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Aphex Twin is dope',
      url:
        'https://images.unsplash.com/photo-1543940610-6c1cb4aa5c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Work view',
      url:
        'https://images.unsplash.com/reserve/GtJALYqlRDiojsfBMQRa_373A1071.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Chilling on Mars',
      url:
        'https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Aphex Twin is dope',
      url:
        'https://images.unsplash.com/photo-1543940610-6c1cb4aa5c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Work view',
      url:
        'https://images.unsplash.com/reserve/GtJALYqlRDiojsfBMQRa_373A1071.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'At the Beach',
      url:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Chilling on Mars',
      url:
        'https://images.unsplash.com/photo-1571769267292-e24dfadebbdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Aphex Twin is dope',
      url:
        'https://images.unsplash.com/photo-1543940610-6c1cb4aa5c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    },
    {
      title: 'Work view',
      url:
        'https://images.unsplash.com/reserve/GtJALYqlRDiojsfBMQRa_373A1071.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'
    }
  ];

  isWithinOffset(index: number): boolean {
    return Math.abs(this.currentImage - index) < this.offset;
  }
}
