import { state } from '@angular/animations';
import { counterState } from './counter.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
const getCounterState = createFeatureSelector<counterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});
