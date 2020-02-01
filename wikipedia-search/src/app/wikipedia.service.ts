import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    const url = `https://en.wikipedia.org/w/api.php`;
    const options = {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        origin: '*',
        srsearch: term,
        utf8: '1'
      }
    };

    return this.http
      .get<WikipediaResponse>(url, options)
      .pipe(pluck('query', 'search'));
  }
}

interface WikipediaResponse {
  query: {
    search: {
      pageid: number;
      snippet: string;
      title: string;
    }[];
  };
}
