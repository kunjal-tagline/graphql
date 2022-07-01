import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import {
  addPost,
  deletePost,
  updatePost,
  loadPostsuccess,
} from './posts.actions';
import { initialState, postAdapter, PostsState } from './posts.state';

export const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    return postAdapter.addOne(action.post, {
      ...state,
      count: state.count + 1,
    });
    // let post = { ...action.post };

    // post.id = (state.posts.length + 1).toString();
    // return {
    //   ...state,
    //   posts: [...state.posts, post],
    // };
  }),
  on(updatePost, (state: PostsState, action: any) => {
    return postAdapter.updateOne(action.post, state);
    // const updatedPosts = state.posts.map((post: Post) => {
    //   return action.post.id === post.id ? action.post : post;
    // });

    // return {
    //   ...state,
    //   posts: updatedPosts,
    // };
  }),
  on(deletePost, (state, { id }) => {
    return postAdapter.removeOne(id, state);
    // const updatedPosts = state.posts.filter((post: Post) => {
    //   return post.id == id;
    // });

    // return {
    //   ...state,
    //   posts: updatedPosts,
    // };
  }),
  on(loadPostsuccess, (state: any, action: any) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
