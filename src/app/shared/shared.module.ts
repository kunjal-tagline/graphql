import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SharedReducer } from './shared.reducer';
import { SHARED_STATE_NAME } from './shared.selector';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(SHARED_STATE_NAME, SharedReducer),
  ],
  exports:[
    LoadingSpinnerComponent
  ]
})
export class SharedModule {}
