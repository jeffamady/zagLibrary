import { Component, OnInit } from '@angular/core';
import { GenderService } from '../services/gender.service';


@Component({
  selector: 'app-gender-container',
  templateUrl: './gender-container.component.html',
  styleUrls: ['./gender-container.component.css']
})
export class GenderContainerComponent implements OnInit {
  // genders: any = [];
  genders = [
    {
      name:"Louis"
    },
    {
      name:"Jean"
    },
    {
      name: "Jacques"
    }
  ];


  constructor(private genderService: GenderService) { }

  async ngOnInit() {

    // this.genders= await this.genderService.genderListFn();

  }

  async addGenre(newGenre) {
    const response = await this.genderService.addGenreService(newGenre);
    return response;
  }

}
