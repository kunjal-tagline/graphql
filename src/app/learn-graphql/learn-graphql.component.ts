import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, mergeAll } from 'rxjs';

const GET_POSTS = gql`
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
  selector: 'app-learn-graphql',
  templateUrl: './learn-graphql.component.html',
  styleUrls: ['./learn-graphql.component.scss'],
})
export class LearnGraphqlComponent implements OnInit {
  public id: any;
  public postData: any = [];
  public loading: boolean = false;
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    const type = fromEvent(document, 'input');
    type
      .pipe(distinctUntilChanged(), debounceTime(1000))
      .subscribe((res: any) => {
        console.log('res :>> ', res);
        this.id = res?.data;
        console.log('this.id :>> ', this.id);
      });
    this.getPosts();
  }

  public getPosts(): void {
    this.apollo
      .watchQuery({
        query: GET_POSTS,
        variables: {
          options: {
            search: {
              q: '1',
            },
          },
        },
      })
      .valueChanges.subscribe((res: any) => {
        //console.log('res.data.posts.data.id :>> ', res.data.posts.data[0].id);
        // if (this.id == res.data.posts.data[0].id) {
        //   console.log(' filter:>> ');
        //   //this.postData = res?.data?.posts?.data;
        // }
        console.log('res :>> ', res);
        //this.postData = res?.data?.posts?.data;
      });
  }
}
