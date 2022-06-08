import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { BlogsComponent } from './blogs/blogs/blogs/blogs.component';
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { ForumComponent } from './forums/forum/forum.component';
import { ForumsComponent } from './forums/forums/forums.component';
import { ThreadComponent } from './forums/thread/thread.component';
import { ThreadsComponent } from './forums/threads/threads.component';
import { UserService } from './services/user.service';
import { ForumsModule } from './forums/forums.module';
import { BlogsModule } from './blogs/blogs.module';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatListComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ForumsModule,
    BlogsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
