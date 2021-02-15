import { Component, OnInit } from '@angular/core';
import { GenderService } from '../services/gender.service';


@Component({
  selector: 'app-gender-container',
  templateUrl: './gender-container.component.html',
  styleUrls: ['./gender-container.component.css']
})
export class GenderContainerComponent implements OnInit {
  genders: any = [];
  constructor(private genderService: GenderService) { }

  async ngOnInit() {

    this.genders= await this.genderService.genderListFn();

  }

}
