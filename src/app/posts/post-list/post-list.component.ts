import { getPosts } from './../state/posts.selector';
import { Observable } from 'rxjs';
import { AppState } from './../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { PostsState } from '../state/posts.state';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public posts$!: Observable<Post[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }
}
