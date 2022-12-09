import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(data:{}) {
    this.add(data);

  }
  get() {
    return localStorage.getItem('token');
  }
  add(data:{}) {
    localStorage.setItem('token', '123456789');
  }

  remove() {
    localStorage.removeItem('token');

  }

  isValid() {
    if (this.get()) {
      return true;
    } else {
      return false;
    }
  }
  loggedIn() {
    return this.isValid();
  }
}
