import { increment, decrement, reset, customInc } from '../state/counter.actions';
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
  value!:number;
  counter$!: Observable<any>;
  counterSubscription!: Subscription;
  constructor(private store: Store<{ count: { counter: number } }>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store.select('count').subscribe((data) => {
      this.counter = data.counter;
    });

    this.counter$ = this.store.select('count');
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

  public add(){
    this.store.dispatch(customInc({value: +this.value}))
    console.log('value :>> ', this.value);
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
