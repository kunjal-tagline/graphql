import { Post } from 'src/app/models/posts.model';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from 'src/app/models/auth.model';
export interface PostsState extends EntityState<Post> {
  count: number;
}

export const postAdapter = createEntityAdapter<Post>({
  //selectId:(post:Post)=> post.id,
  sortComparer: sortByName,
});

export const initialState: PostsState = postAdapter.getInitialState({
  count: 0,
});

export function sortByName(a: Post, b: Post): number {
  const compare = a.title.localeCompare(b.title);
  if (compare > 0) {
    return -1;
  } else if (compare < 0) {
    return 1;
  } else {
    return compare;
  }
}
