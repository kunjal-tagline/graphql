import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const CREATE_ALBUM = gql`
  mutation {
    createAlbum(input: { userId: "2", title: "test" }) {
      user {
        id
        email
        website
      }
    }
  }
`;

const UPDATE_ALBUM = gql`
  mutation {
    updateAlbum(id: "3", input: { title: "test", userId: "7" }) {
      id
      title
      user {
        username
        email
      }
      photos {
        data {
          title
        }
      }
    }
  }
`;

const DELETE_POST = gql`
  mutation {
    deletePost(id: "3")
  }
`;

const PAGINATION = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public albumData: any;
  public createAlbum: any = [];
  public updateAlbum: any = [];
  public photos: any;
  public paginationQuery: any;
  public feed: any[] = [];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.watchQuery();
    this.createMutation();
    this.updateMutation();
    this.deletePost();
    this.paginationQuery = this.apollo.watchQuery<any>({
      query: PAGINATION,
      variables: {
        options: {
          paginate: {
            page: 1,
            limit: 10,
          },
        },
      },
      fetchPolicy: 'network-only',
    });
    this.feed = this.paginationQuery.valueChanges.subscribe((res: any) => {
      //console.log('data :>> ', res);
      this.feed = res?.data?.posts?.data;
      //console.log('feed data:>> ', res?.data?.posts?.data);
      console.log('this.feed :>> ', this.feed.length);
    });
  }

  public watchQuery() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            album(id: "4") {
              id
              title
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.albumData = Object.values(result?.data?.album);
      });
  }

  public createMutation() {
    this.apollo
      .mutate({
        mutation: CREATE_ALBUM,
      })
      .subscribe((res: any) => {
        this.createAlbum = Object.values(res?.data?.createAlbum?.user);
      });
  }

  public updateMutation() {
    this.apollo
      .mutate({
        mutation: UPDATE_ALBUM,
      })
      .subscribe((res: any) => {
        console.log('res :>> ', res.data.updateAlbum);
        this.updateAlbum = [res?.data?.updateAlbum];
        this.photos = res.data.updateAlbum.photos.data;
        //console.log('this.updateAlbum :>> ', res.data.updateAlbum.photos.data);
      });
  }

  public deletePost() {
    this.apollo.mutate({ mutation: DELETE_POST }).subscribe((res: any) => {
      console.log('res :>> ', res?.data.deletePost);
    });
  }

  public fetchMore() {
    this.paginationQuery.fetchMore({
      query: PAGINATION,
      variables: {
        page: this.feed.length,
      },
    });
  }
}
