import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-form',
  templateUrl: './gender-form.component.html',
  styleUrls: ['./gender-form.component.css']
})
export class GenderFormComponent implements OnInit {


  name = '';

  saveGender() {
    alert("I'm going to save a gender: " + this.name);
  }
    
  constructor() { }

  ngOnInit() {



  }

}
