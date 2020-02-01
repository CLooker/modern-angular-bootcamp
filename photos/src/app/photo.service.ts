import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhotoUrl() {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID ' +
            'b321d16df253e6523c0f9921e1ed4f4e4f710232b8c1efcae4fef2ae28aee1a3'
        }
      })
      .pipe(pluck('urls', 'regular'));
  }
}

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}
