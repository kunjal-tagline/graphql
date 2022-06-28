import { loginSucess, signUpSucess } from './auth.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './auth.state';

export const _authReducer = createReducer(
  initialState,
  on(loginSucess, (state: any, action: any) => {
    return {
      ...state,
      user: action,
    };
  }),
  on(signUpSucess, (state: any, action: any) => {
    return {
      ...state,
      user: action,
    };
  })
);

export function AuthReducer(state:any,action:any){
  return _authReducer(state,action)
}