import { BooksService } from '../books.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from '../state/books.selectors';
import { addBook, removeBook, retriveBookList } from '../state/books.actions';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }
  constructor(private BooksService: BooksService, private store: Store) {}

  ngOnInit(): void {
    this.BooksService.getBooks().subscribe((books) => {
      this.store.dispatch(retriveBookList({ books }));
    });
  }
}
