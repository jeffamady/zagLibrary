import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  url = "jnalibrary.herokuapp.com"
  constructor(private http: HttpClient) { }

  async genderListFn() {
    try {
      const response = await this.http.get(this.url+"/gender").toPromise();

      return response
    }
    catch(e) {
      console.log(e);
      return [ ];
    }
  }
}
