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
    updateAlbum(id: "1", input: { title: "test", userId: "3" }) {
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
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.watchQuery();
    this.createMutation();
    this.updateMutation();
    this.deletePost();
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
        //console.log('res :>> ', res.data.updateAlbum);
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
}
