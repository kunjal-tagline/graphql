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
  counter$!: Observable<any>;
  counterSubscription!: Subscription;
  constructor(private store: Store<{ count:any }>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store.select('count').subscribe((data) => {
      this.counter = data.counter;
      this.name = data.name;
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

  public add() {
    this.store.dispatch(customInc({ value: this.value }));
  }
 
  public onChangeName(){
    
  }
  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
