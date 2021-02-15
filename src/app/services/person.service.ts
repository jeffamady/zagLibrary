import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url = "jnalibrary.herokuapp.com"
  constructor(private http: HttpClient) { }

  async personListFn() {
    try {
      const response = await  this.http.get(this.url+"/person").toPromise();

      return response;
    }
    catch(e) {
      console.log(e);
      return [ ];
    }
  }
}
