import { decrement, increment, reset, customInc } from './counter.actions';
import { initialState } from './counter.state';
import { createReducer, on } from '@ngrx/store';
import { state } from '@angular/animations';

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return { counter: state.counter + 1 };
  }),
  on(decrement, (state) => {
    return { counter: state.counter - 1 };
  }),
  on(reset, (state) => {
    return { counter: 0 };
  })
  // on(customInc, (state, action) => {
  //   return { ...state, counter: state.counter + action.value };
  // })
);
