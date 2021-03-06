export interface Post {
  id: string | undefined;
  title: string;
  description: string;
}

export interface PostList {
  id: number;
  userId: number;
  title: string;
  body: string;
}
