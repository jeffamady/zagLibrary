import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { GenderService } from '../services/gender.service';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent implements OnInit {
  // @Input() books: any= [ ];
  books: any = [];
  persons: any= [];
  genders: any= [];


  libros:any;
  constructor(private bookService: BookService, private genderService: GenderService, private personService: PersonService) { }

  async ngOnInit() {

    this.books = await this.bookService.bookListFn();
    this.genders = await this.genderService.genderListFn();
    this.persons = await this.personService.personListFn();

    // add gender.name & person.nickName to the books
    this.libros =  this.books.map( (book)=> {
      // found 
      const gender1 =  this.genders.find( (item) => {
        return item._id == book.gender;
      });

     


      const person1 =  this.persons.find( (element) => {
        return element._id == book.lentTo;
      });
      console.log('gender' + gender1);
      console.log('person' + person1);
      const newBook = {
        name: book.name,
        gender: gender1,
        description: book.description,
        lentTo: person1
      }

      return newBook;


    });
  }

  async addBook(newBook) {
    const response = await this.bookService.addBookService(newBook);
    return response;
  }


}
