import { Injectable } from '@angular/core';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private mockData = data;

  constructor() { }

  post(post_id: number): any {
    return this.mockData.find(post => {
      return post.post_id === post_id
    });
  }

  get posts() {
    return this.mockData;
  }
}
