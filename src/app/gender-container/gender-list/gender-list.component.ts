import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.css']
})
export class GenderListComponent implements OnInit {
  gender = {
    name: ''
  }
  @Input() genders =[];
  constructor() { }

  ngOnInit(): void {
  }

}
