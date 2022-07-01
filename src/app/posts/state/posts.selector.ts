import { find } from 'rxjs';
import { RouterStateUrl } from './../../router/custom.serializer';
import { getCurrentRoute } from './../../router/router.selector';
import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { postAdapter, PostsState } from './posts.state';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const postsSelectors = postAdapter.getSelectors();

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);
export const getPostEntities = createSelector(
  getPostsState,
  postsSelectors.selectEntities
);

export const getPostByID = createSelector(
  getPostEntities,
  //getPostsState,
  getCurrentRoute,
  (posts, route: RouterStateUrl) => {
    return posts[route.params['id']];
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
