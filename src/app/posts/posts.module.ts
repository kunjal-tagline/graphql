import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostListComponent, AddPostComponent, EditPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class PostsModule {}
