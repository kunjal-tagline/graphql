import { GraphqlComponent } from './graphql/graphql.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterOutputComponent,
  },
  {
    path: 'graphql',
    component: GraphqlComponent,
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: '**',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
