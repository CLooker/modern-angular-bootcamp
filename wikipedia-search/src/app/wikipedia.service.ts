import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    const baseUrl = `https://en.wikipedia.org/w/api.php`;
    const options = {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        srsearch: term,
        origin: '*',
        utf8: '1'
      }
    };

    return this.http.get(baseUrl, options);
  }
}
