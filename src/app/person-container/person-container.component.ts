import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';


@Component({
  selector: 'app-person-container',
  templateUrl: './person-container.component.html',
  styleUrls: ['./person-container.component.css']
})
export class PersonContainerComponent implements OnInit {
  persons: any = [];
  constructor(private PersonService: PersonService ) { }

  async ngOnInit() {
    this.persons = await this.PersonService.personListFn();
  }

}
