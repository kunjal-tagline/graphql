import { Post } from 'src/app/models/posts.model';

export interface PostsState {
  posts: Post[];
}

export const initialState: PostsState = {
  posts: [
    { id: '1', title: 'My first post', description: '20,jun' },
    { id: '2', title: 'My second post', description: '21,jun' },
  ],
};
