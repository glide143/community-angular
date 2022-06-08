import { Injectable } from '@angular/core';
import { Data, Users } from './data';

@Injectable({
  providedIn: 'root'
})
export class ForumsService {
  private availableUsers = Users
  private avaiableData = Data;

  constructor() { }

  get users() {
    return this.availableUsers;
  }

  get forums() {
    return this.avaiableData;
  }
}
