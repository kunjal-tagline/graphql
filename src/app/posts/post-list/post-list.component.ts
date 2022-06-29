import { PostList } from './../../models/posts.model';
import { loadPosts } from './../state/posts.actions';
import { getPosts } from './../state/posts.selector';
import { Observable } from 'rxjs';
import { AppState } from './../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { PostsState } from '../state/posts.state';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public posts$!: Observable<Post[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    //this.posts$ = this.store.select(getPosts);
    this.store.dispatch(loadPosts());
  }

  onDeletePost(id: string | undefined) {
    if (confirm('Are you sure want to delete post')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
