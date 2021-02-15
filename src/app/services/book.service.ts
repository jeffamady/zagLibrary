import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = "jnalibrary.herokuapp.com";
  constructor(private http: HttpClient) { }


  async bookListFn() {
    try {
      const response = await this.http.get(this.url+"/book").toPromise();

      return response;
    }
    catch(e) {
      console.log(e);

      return [ ]
    }
  }
}
