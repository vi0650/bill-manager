import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    const user = this.authService.getLoggedUser();
    const requiredRole = route.data['role'];

    if (!requiredRole) {
      return true;
    }

    if (user.role === requiredRole) {
      return true;
    }

    if (user.role === 'SuperAdmin') {
      this.router.navigate(['/super-admin']);
    } else {
      this.router.navigate(['/admin']);
    }

    return false;
  }
}