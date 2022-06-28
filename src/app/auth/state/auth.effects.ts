import { setLoadingSpinner } from './../../shared/shared.actions';
import { Store } from '@ngrx/store';
import { loginStart, loginSucess } from './auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { exhaustMap, map, of, catchError, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authServiuce: AuthService,
    private store: Store,
    private roter: Router
  ) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authServiuce.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const user = this.authServiuce.formatUser(data);
            
            return loginSucess({ user });
          }),
          catchError((errRes) => {
            return of(errRes);
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(loginSucess),
        tap((action) => {
          this.roter.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );
}
