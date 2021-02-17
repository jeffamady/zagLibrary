import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  firstName='';
  lastName ='';
  nickName='';
  email='';
  phone='';
  @Output() newPerson: any = new EventEmitter;



  constructor() { }

  ngOnInit(): void {
  }

  savePerson() {
    this.newPerson.emit(this.firstName, this.lastName, this.nickName, this.email, this.phone);
  }

}
