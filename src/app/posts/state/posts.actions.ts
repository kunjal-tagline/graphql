import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';

export const addPost = createAction(
  '[ADD POST] Adding post',
  props<{ post: Post }>()
);
export const updatePost = createAction(
  '[post page] update post',
  props<{ post: Post }>()
);
export const deletePost = createAction(
  '[post page] delete post',
  props<{ id:string | undefined }>()
);
