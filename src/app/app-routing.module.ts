import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenderContainerComponent } from './gender-container/gender-container.component';
import { PersonContainerComponent } from './person-container/person-container.component';
import { BookContainerComponent } from './book-container/book-container.component';

const routes: Routes = [
  {path: 'genres', component: GenderContainerComponent},
  {path: 'persons', component: PersonContainerComponent},
  {path: 'books', component: BookContainerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
