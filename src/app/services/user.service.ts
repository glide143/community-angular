import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

let username = localStorage.getItem('username') || '';
let guest = (username) ? false : true;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  isGuest() {
    return guest;
  }

  getUser() {
    return username;
  }

  login(newUsername: any) {
    username = newUsername;
    guest = false;
    localStorage.setItem('username', username);
  }

  logout() {
    username = '';
    guest = true;
    localStorage.setItem('username', '');
    this.router.navigate([{ outlets: { chat: null } }]);
  }
}
