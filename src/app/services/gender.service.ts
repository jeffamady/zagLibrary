import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  url = "https://jnalibrary.herokuapp.com"
  constructor(private http: HttpClient) { }

  async genderListFn() {
    try {
      const answer = await this.http.get(this.url+"/gender").toPromise();

      return answer;
    }
    catch(e) {
      console.log(e);
      return [ ];
    }
  }

  async addGenreService(newGenre) {
    try {
      const body = {
        name: newGenre.name
      }

      const answer = await this.http.post(this.url+"/gender", body).toPromise();

      return answer;

    }
    catch(e) {
      console.log(e);
      return [];
    }
  }
}
