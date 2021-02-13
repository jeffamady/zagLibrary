import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.css']
})
export class BookContainerComponent implements OnInit {
  // @Input() books: any= [ ];

  books =[
    {
      _id: "iejf98",
      name: " La vi bel",
      description: "sak pwal gen la",
      gender: "lolo",
      lentTo: "lala"

    },
    {
      _id: "289d",
      name: " La vi  2",
      description: "sak pwal gen la 22jjkjz",
      gender: "lili",
      lentTo: "lele"

    }
  ];

  genders = [
    {
      _id: "lolo",
      name: "terror"
    },
    {
      _id: "lili",
      name: "fantasy"
    }
  ];
  persons =[
    {
      _id: "lala",
      firstName: "jrfr",
      lastName: "isjfdn",
      nickName: "Degouden",
      email: "kjkn22@jmkf.vom",
      phone: 2193940
    },
    {
      _id: "lele",
      firstName: "jrfr",
      lastName: "isdfgjfdn",
      nickName: "Zagree",
      email: "kjkn22@jmkf.vom",
      phone: 2193940
    }
   
  ];

  libros:any;
  constructor() { }

  ngOnInit(): void {

    // add gender.name & person.nickName to the books
    this.libros = this.books.map( (book)=> {
      // found 
      const gender1 = this.genders.find( (item) => {
        return item._id == book.gender;
      });

     


      const person1 = this.persons.find( (element) => {
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


  // suma= suma+ 10:

}
