import { Post } from './../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostDataService extends DefaultDataService<Post> {
  constructor(http: HttpClient, HttpUrlGenerator: HttpUrlGenerator) {
    super('Post', http, HttpUrlGenerator);
  }

  // override getAll(): Observable<Post[]> {
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
  //     map((data) => {
  //       const posts: Post[] = [];
  //       for (let key in data) {
  //         posts.push(data);
  //       }
  //       return posts;
  //     })
  //   );
  // }

  public defaultDataServiceConfig: DefaultDataServiceConfig = { 
    root: 'https://jsonplaceholder.typicode.com/posts',
    timeout: 3000, // request timeout 
}
}
