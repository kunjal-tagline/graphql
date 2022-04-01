import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

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
    type.pipe().subscribe((res: any) => {
      console.log('res :>> ', res);
      this.id = res?.data;
    });
    this.getPosts();
  }

  public getPosts() {
    (this.loading = true),
      this.apollo
        .watchQuery({
          query: GET_POSTS,
          variables: {
            options: {
              paginate: {
                page: 1,
                limit: 100,
              },
            },
          },
        })
        .valueChanges.subscribe((res: any) => {
          console.log('res :>> ', res);
          this.postData = res?.data?.posts?.data;
        });
  }
}
