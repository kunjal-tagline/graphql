import { SharedState } from './shared.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { state } from '@angular/animations';
export const SHARED_STATE_NAME = 'shared';

const getSahredstate = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading=createSelector(getSahredstate,(state)=>{
    return state.showLoading;
})

export const getErrorMessage = createSelector(getSahredstate, (state) => {
    return state.errorMessage;
  });