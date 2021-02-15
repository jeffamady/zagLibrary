import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gender-form',
  templateUrl: './gender-form.component.html',
  styleUrls: ['./gender-form.component.css']
})
export class GenderFormComponent implements OnInit {


  name = '';
  @Output() newGenre: any = new EventEmitter();


  constructor() { }

  ngOnInit() {}

  saveGender() {
    this.newGenre.emit(this.name);
  }


}
