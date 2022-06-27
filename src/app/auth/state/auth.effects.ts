import { setLoadingSpinner } from './../../shared/shared.actions';
import { Store } from '@ngrx/store';
import { loginStart, loginSucess } from './auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { exhaustMap, map } from 'rxjs';
import { User } from 'src/app/models/auth.model';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authServiuce: AuthService,private store:Store) {}

  login$ = createEffect(() => {
    return this.action$.pipe( 
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authServiuce.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({status:false}));
            const user = this.authServiuce.formatUser(data);
            return loginSucess({ user });
          })
        );
      })
    );
  });
}
