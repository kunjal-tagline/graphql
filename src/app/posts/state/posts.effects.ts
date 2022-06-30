import { getPostByID } from './posts.selector';
import { PostList } from './../../models/posts.model';
import { loadPosts, LoadPostsFail, loadPostsuccess } from './posts.actions';
import { Injectable } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';

@Injectable()
export class PostsEffects {
  constructor(private postService: PostsService, private action$: Actions) {}

  loadPosts$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadPosts),
      switchMap(() => {
        return this.postService.getPosts().pipe(
          map((posts: PostList[]) => {
            return loadPostsuccess({ payload: posts });
          }),
          catchError((error) => of(LoadPostsFail(error)))
        );
      })
    );
  });

  // getSignlePost$ = createEffect(() => {
  //   return this.action$.pipe(
  //     ofType(ROUTER_NAVIGATION),
  //     filter((r: RouterNavigatedAction) => {
  //       return r.payload.routerState.url.startsWith('/posts/detail');
  //     }),map((r:RouterNavigatedAction)=>{
  //       return r.payload.routerState['params']['id'];
  //     }),
  //     switchMap((id)=>{
  //        return this.PostsService.getPostByID(id).pipe(
  //          map((post)=>{
  //            const postData =[{...post,id}];
  //             return loadPostsuccess({posts:postData});
  //          })
  //        )
  //     })
  //   );
  // });
}
