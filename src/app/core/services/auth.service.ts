import { Injectable } from '@angular/core';
import { Admins } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(userName: string, password: string): Admins | null {
    const admin: Admins[] = JSON.parse(localStorage.getItem('Admins') || '[]');

    const user = admin.find((x: any) =>
      x.userName === userName && x.password === password
    ) || null;

    if (!user)return null;
 

    localStorage.setItem('loggedUser', JSON.stringify(user));
    return user;
  }

  isLoggedIn() {
    return localStorage.getItem('loggedUser');
  }

  getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser')!);
  }

  logout() {
    localStorage.removeItem('loggedUser');
  }

}