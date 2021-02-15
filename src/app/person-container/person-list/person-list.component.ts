import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  person = {
    firstName:'',
    lastName: '',
    nickName:'',
    email:'',
    phone:''
  }

  @Input() persons =[];
  constructor() { }

  ngOnInit(): void {
  }

}
