import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AddEditComponent } from './posts/add-edit/add-edit.component';
import { SiglePostComponent } from './posts/sigle-post/sigle-post.component';
import { postsResolver } from './posts/posts.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
    resolve: { posts: postsResolver },
  },
  {
    path: 'posts/add',
    component: AddEditComponent,
  },
  {
    path: 'posts/edit/:id',
    component: AddEditComponent,
  },
  {
    path: 'posts/details/:id',
    component: SiglePostComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
