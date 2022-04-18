import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [BookListComponent, BookCollectionComponent, BookComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
