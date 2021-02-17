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


  async addBookService(newBook) {
    try{
      const pocket={
        name: newBook.name,
        gender: newBook.gender,
        description: newBook.description,
        lentTo: newBook.lentTo
      }
      const response = await this.http.post(this.url+"/book", pocket).toPromise();
      return response;
    }
    catch(e){
      console.log(e);
      return [ ];
    }
  }
}
