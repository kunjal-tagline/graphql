import { getPostByID } from './../state/posts.selector';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  public post!: any;
  postSubscription!: Subscription;
  public updatePostForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>,
  ) {}

  ngOnInit(): void {
   
    this.route.paramMap.subscribe((params) => {
      const id: string | null = params.get('id');
      this.postSubscription = this.store
        .select(getPostByID, {id})
        .subscribe((data) => {
          this.post = data;
          this.createForm();
        });
    });
  }

  createForm() {
    this.updatePostForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
