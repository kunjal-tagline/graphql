import { PostList } from './../../models/posts.model';
import { loadPosts, LoadPostsFail, loadPostsuccess } from './posts.actions';
import { Injectable } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class PostsEffects {
  constructor(
    private postService: PostsService,
    private action$: Actions
  ) {}

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
}
