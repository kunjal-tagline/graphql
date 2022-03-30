import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
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
        provide: APOLLO_OPTIONS,
        useFactory(httpLink: HttpLink) {
          return {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'https://48p1r2roz4.sse.codesandbox.io'
            }),
          };
        },
        deps: [HttpLink],
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
