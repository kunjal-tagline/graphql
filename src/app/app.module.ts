import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditComponent } from './posts/add-edit/add-edit.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { SiglePostComponent } from './posts/sigle-post/sigle-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditComponent,
    PostListComponent,
    SiglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
