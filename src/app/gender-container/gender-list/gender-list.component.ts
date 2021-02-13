import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})
export class GenderListComponent implements OnInit {
  genders: any= [];
  constructor() { }

  ngOnInit(): void {
  }

}
