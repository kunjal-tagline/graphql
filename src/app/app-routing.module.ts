import { LearnGraphqlComponent } from './learn-graphql/learn-graphql.component';
import { GraphqlComponent } from './graphql/graphql.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'counter',
        component: CounterOutputComponent,
      },
      {
        path: 'graphql',
        component: GraphqlComponent,
      },
      {
        path: 'learn-graphql',
        component: LearnGraphqlComponent,
      },
      {
        path: 'book',
        loadChildren: () =>
          import('./books/books.module').then((m) => m.BooksModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./posts/posts.module').then((m) => m.PostsModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'graphql',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
