import { Injectable } from '@angular/core';
import { Data, Users } from './data';

@Injectable({
  providedIn: 'root'
})
export class ForumsService {
  private availableUsers = Users
  private avaiableData = Data;

  constructor() { }

  forum(forumAlias: string): any {
    return this.avaiableData.find(row => {
      return row.alias === forumAlias;
    });
  }

  thread(forumAlias: string, threadAlias: string): any {
    return this.forum(forumAlias).threads.find((row: any) => {
      return row.alias === threadAlias;
    });
  }

  get users() {
    return this.availableUsers;
  }

  get forums() {
    return this.avaiableData;
  }
}
