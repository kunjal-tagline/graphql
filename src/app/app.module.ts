import { AppReducer } from './store/app.state';
import { booksReducer } from './books/state/books.reducer';
import { counterReducer } from './counter/state/counter.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { ApolloModule, APOLLO_FLAGS, APOLLO_OPTIONS } from 'apollo-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { GraphqlComponent } from './graphql/graphql.component';
import { collectionReducer } from './books/state/collections.reducer';
import { LearnGraphqlComponent } from './learn-graphql/learn-graphql.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PostListComponent } from './posts/post-list/post-list.component';
import { environment } from 'src/environments/environment';
import { postsReducer } from './posts/state/posts.reducer';
import { AddPostComponent } from './posts/add-post/add-post.component';
// export function debug(reducer: ActionReducer<any>):ActionReducer<any>{
//   return function(state,action){
//     console.log('state :>> ', state);
//     console.log('action :>> ', action);

//     return reducer(state,action);
//   };
// }

// export const metaReducers: MetaReducer<any>[]=debug;

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    GraphqlComponent,
    LearnGraphqlComponent,
    PostListComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ApolloModule,
    HttpClientModule,
    StoreDevtoolsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      //AppReducer
      books: booksReducer,
      collection: collectionReducer,
      posts: postsReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 45,
      outerStrokeWidth: 21,
      innerStrokeWidth: 22,
      space: -22,
      outerStrokeColor: '#8EA986',
      innerStrokeColor: '#dfe5dd',
      animation: false,
      outerStrokeLinecap: 'square',
      showSubtitle: false,
      renderOnClick: false,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    {
      provide: APOLLO_FLAGS,
      useValue: {
        useMutationLoading: true,
      },
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://graphqlzero.almansi.me/api',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
