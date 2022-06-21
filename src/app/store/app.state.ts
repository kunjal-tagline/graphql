import { counterReducer } from './../counter/state/counter.reducer';
import { PostsState } from './../posts/state/posts.state';
import { counterState } from './../counter/state/counter.state';
import { postsReducer } from '../posts/state/posts.reducer';

export interface AppState {
  counter: counterState,
  posts: PostsState
}

export const AppReducer = {
  counter: counterReducer,
  posts: postsReducer,
};
