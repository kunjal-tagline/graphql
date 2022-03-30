import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import {ApolloModule, APOLLO_FLAGS, APOLLO_OPTIONS} from 'apollo-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule
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
              uri: 'https://graphqlzero.almansi.me/api'
            }),
          };
        },
        deps: [HttpLink],
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
