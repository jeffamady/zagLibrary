import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  book = {
    name:'',
    gender:'',
    description:'',
    lenTo:''
  };

  @Input() books=[];

  constructor() { }

  ngOnInit(): void {
  }

}
