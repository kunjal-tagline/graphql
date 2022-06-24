import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { PostsState } from './posts.state';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostByID = createSelector(
  getPostsState,
  (state: any, props: any): any => {
    return state.posts.find((post: any) => {
      post.id === props.id;
    });
  }
);

// export const getPostByID = ()  =>
//   createSelector(getPostsState, (state) => {
//     console.log('state :>> ', state);
//     return state.posts.find((post) => post.id === props.id);
//   });
