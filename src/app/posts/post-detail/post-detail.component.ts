import { getPostByID } from './../state/posts.selector';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post!: Observable<Post>;
  constructor(private store:Store) {}

  ngOnInit(): void {
    //this.post=this.store.select(getPostByID);
  }
}
