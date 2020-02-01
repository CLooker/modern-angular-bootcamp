import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photoUrl: string;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {}

  getPhotoUrl() {
    this.photoService.getPhotoUrl().subscribe(photoUrl => {
      this.photoUrl = photoUrl;
    });
  }

  onGetPhotoClick() {
    this.getPhotoUrl();
  }
}
