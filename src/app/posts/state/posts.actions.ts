import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
export const ADD_POST_ACTION = '[ADD POST] Adding post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
