import { createReducer, on } from '@ngrx/store';
import {retriveBookList } from './books.actions';


export const initialState: ReadonlyArray<any> = [];

export const booksReducer = createReducer(
  initialState,
  on(retriveBookList, (state, { books }) => books)
);