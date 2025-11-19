import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {

    const loggedUser = localStorage.getItem('loggedUser');

    if (!loggedUser) {
      this.router.navigate(['']);
      this.router.navigate(['/login']);
      return false
    }
    return true;
  }
};
