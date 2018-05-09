import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor(public http: HttpClient) { }

  getAPI(url: string): Observable<any> {
    // return this.http.get(url).catch(this.handleError);
    return this.http.get(url);
  }

  // handleError(response: Response) {
  //   return Observable.throw(response);
  // }

}
