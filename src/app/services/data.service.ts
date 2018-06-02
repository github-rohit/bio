import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  private url = 'https://about-my-bio.firebaseio.com/bio.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url)
    .pipe(map((response: any) => response));
  }
}
