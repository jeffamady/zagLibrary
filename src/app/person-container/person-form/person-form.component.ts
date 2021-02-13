import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

person = {
  firstName:'',
  lastName: '',
  nickName:'',
  email:'',
  phone:''
}

  savePerson() {
    alert( " You added a new person " + this.person.firstName + this.person.lastName + this.person.nickName + this.person.email + this.person.phone)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
