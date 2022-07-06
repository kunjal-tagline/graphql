import { PostDataService } from './services/post-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditComponent } from './posts/add-edit/add-edit.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { SiglePostComponent } from './posts/sigle-post/sigle-post.component';
import { HomeComponent } from './home/home.component';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { postsResolver } from './posts/posts.resolver';

@NgModule({
  declarations: [
    AppComponent,
    AddEditComponent,
    PostListComponent,
    SiglePostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EntityDataModule.forRoot(entityConfig),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [PostDataService, postsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
