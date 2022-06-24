import { LearnGraphqlComponent } from './learn-graphql/learn-graphql.component';
import { GraphqlComponent } from './graphql/graphql.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

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
    path: 'learn-graphql',
    component: LearnGraphqlComponent,
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'posts',
    component: PostListComponent,
    children: [
      { path: 'add-post', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent },
    ],
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
