import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/auth.model';

export const loginStart = createAction(
  '[Start login] Starting login with fill data',
  props<{ email: any; password: any }>()
);

export const loginSucess = createAction(
  '[Login sucess] Login sucessfully',
  props<{ user: User }>()
);

export const signUpStart = createAction(
  '[Start sign-up] Starting sign-up',
  props<{ email: any; password: any }>()
);

export const signUpSucess = createAction(
  '[sign up sucess] sign up sucessfully',
  props<{ user: User }>()
);