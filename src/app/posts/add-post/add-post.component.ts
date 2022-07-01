import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  public addPostForm!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.addPostForm = this.fb.group({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      description: new FormControl(null, [Validators.required]),
    });
  }

  // descriptionError() {
  //   const descriptionValidation = this.addPostForm.get('description');
  //   if (descriptionValidation?.touched && descriptionValidation?.invalid) {
  //     return 'Description required';
  //   }
  // }
  onAddPost() {
    const post: any = {
      title: this.addPostForm.value.title,
      description: this.addPostForm.value.description,
    };
    this.store.dispatch(addPost({ post }));
  }
}
