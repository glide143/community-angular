import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsService } from './services/blogs.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BlogsComponent, BlogComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    BlogsService
  ]
})
export class BlogsModule { }
