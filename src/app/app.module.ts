import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { BookContainerComponent } from './book-container/book-container.component';
import { GenderContainerComponent } from './gender-container/gender-container.component';
import { PersonContainerComponent } from './person-container/person-container.component';
import { BookFormComponent } from './book-container/book-form/book-form.component';
import { BookListComponent } from './book-container/book-list/book-list.component';
import { GenderFormComponent } from './gender-container/gender-form/gender-form.component';
import { GenderListComponent } from './gender-container/gender-list/gender-list.component';
import { PersonFormComponent } from './person-container/person-form/person-form.component';
import { PersonListComponent } from './person-container/person-list/person-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    BookContainerComponent,
    GenderContainerComponent,
    PersonContainerComponent,
    BookFormComponent,
    BookListComponent,
    GenderFormComponent,
    GenderListComponent,
    PersonFormComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
