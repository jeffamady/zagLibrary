import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
 @Input() genders = [ ];
 @Input() persons = [ ];


  
  book = {
    name:'',
    gender: '',
    description:'',
    lentTo: ''
  } 

  saveBook () {
    alert('I gonna save a book' + this.book.name + this.book.gender + this.book.description + this.book.lentTo);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
