import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    // children: [
    //   {
    //     path: '**',
    //     component: BookCollectionComponent,
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
