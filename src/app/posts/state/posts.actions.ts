import { PostList } from './../../models/posts.model';
import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';

// CRUD OPRATION ACTIONS
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
  props<{ id: string | undefined }>()
);

// LOAD POST ACTIONS
export const loadPosts = createAction('[load post] Loading post start');

export const loadPostsuccess = createAction(
  '[load post success] Loading post successfully',
  props<{ payload: PostList[] }>()
);

export const LoadPostsFail = createAction(
  '[List Post] Load Posts Fail',
  props<{ payload: string }>()
);
