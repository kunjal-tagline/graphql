import { decrement, increment, reset } from './counter.actions';
import { initialState } from './counter.state';
import { createReducer, on } from '@ngrx/store';

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
  }),
);
