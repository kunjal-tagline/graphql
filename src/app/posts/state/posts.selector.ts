import { find } from 'rxjs';
import { RouterStateUrl } from './../../router/custom.serializer';
import { getCurrentRoute } from './../../router/router.selector';
import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { PostsState } from './posts.state';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostByID = createSelector(
  getPostsState,
  getCurrentRoute,
  (posts, route: RouterStateUrl)=> {
    // return posts.find((post: any) => {
    //   post.id === route.params['id'];
    // });
  }
);

// export const getPostByID = ()  =>
//   createSelector(getPostsState, (state) => {
//     console.log('state :>> ', state);
//     return state.posts.find((post) => post.id === props.id);
//   });
