import { counterState } from './../state/counter.state';
import { AppState } from './../../store/app.state';
import { getCounter } from './../state/counter.selector';
import {
  increment,
  decrement,
  reset,
  customInc,
} from '../state/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  public counter!: number;
  public name!: string;
  value!: number;
  counter$!: Observable<number>;
  counterSubscription!: Subscription;
  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.counterSubscription = this.store.select(getCounter).subscribe((counter) => {
    //   this.counter = counter;
    // });

    this.counter$ = this.store.select(getCounter);
  }

  public onInc() {
    this.store.dispatch(increment());
  }

  public onDec() {
    this.store.dispatch(decrement());
  }

  public onReset() {
    this.store.dispatch(reset());
  }

  public add() {
    this.store.dispatch(customInc({ value: this.value }));
  }

  ngOnDestroy(): void {
    // if (this.counterSubscription) {
    //   this.counterSubscription.unsubscribe();
    // }
  }
}
