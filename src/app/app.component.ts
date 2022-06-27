import { SharedState } from './shared/shared.state';
import { getLoading } from './shared/shared.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  progressValue: number = 50;
  showLoading!: Observable<boolean>;

  constructor(private store: Store<SharedState>) {}
  ngOnInit() {
    this.showLoading = this.store.select(getLoading);
    console.log('this.showLoading :>> ', this.showLoading);
  }
}
