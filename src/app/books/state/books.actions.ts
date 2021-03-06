import { createAction, props } from '@ngrx/store';


export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);

export const retriveBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ books:any}>()
);
