import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardHomeComponent } from './components/user-details/dashboard-home/dashboard-home.component';
import { UserListComponent } from './components/user-details/user-list/user-list.component';
import { PostListComponent } from './components/user-details/post-list/post-list.component';
import { PostCreateComponent } from './components/user-details/post-create/post-create.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileViewComponent } from './components/shared/user-profile-view/user-profile-view.component';
import { PostViewComponent } from './components/shared/post-view/post-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHomeComponent,
    UserListComponent,
    PostListComponent,
    PostCreateComponent,
    UserProfileViewComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
