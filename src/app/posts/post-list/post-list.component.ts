import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
posts$:Observable<Post[]> | undefined

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    //this.posts$=this.postService.getAll();
    this.posts$=this.postService.entities$;
    console.log('this.posts$ :>> ', this.posts$);
  }
}
