import { PostList } from './../models/posts.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  PostURL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostList[]> {
    return this.http.get<PostList[]>(this.PostURL);
  }
}
