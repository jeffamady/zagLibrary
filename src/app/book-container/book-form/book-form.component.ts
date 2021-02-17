import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
 @Input() genders = [ ];
 @Input() persons = [ ];

  @Output() newBook: any = new EventEmitter;
  name ='';
  gender = '';
  description = '';
  lentTo = '';
  

  
  constructor() { }

  ngOnInit(): void {
  }

  saveBook () {
    this.newBook.emit(this.name, this.gender, this.description, this.lentTo);
  }

}
