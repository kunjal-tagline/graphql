import { PostService } from './../services/post.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { first, map, mergeMap, Observable, of } from 'rxjs';

@Injectable()
export class postsResolver implements Resolve<boolean> {
  constructor(private PostService: PostService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    // throw new Error('method not implemented!!');
    return this.PostService.loaded$.pipe(
      mergeMap((loaded) => {
        if (loaded) {
          return of(true);
        }
        return this.PostService.getAll().pipe(
          map((posts) => {
            return !!posts;
          })
        );
      }), first()
    );
  }
}
