import { increment, decrement, reset } from '../state/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  public counter!: number;
  constructor(private store: Store<{ count: { counter: number } }>) {}

  ngOnInit(): void {
    this.store.select('count').subscribe(data=>{
      //console.log('data :>> ', data);
      this.counter=data.counter;
    })
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
}
