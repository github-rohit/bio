import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private url = 'https://about-my-bio.firebaseio.com/bio.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
}
