import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { state } from "@angular/animations";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 1. Check if User is Logged In
    if (!this.authService.isLoggesIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    // 2. Get the User and the Required Role
    const user = this.authService.getLoggedUser(); // Returns object { userName:..., role: 'admin', ... }
    const requiredRole = route.data['role']; // Getting the data from app-routing ('admin' or 'super-admin')

    // 3. If the route has no role defined, just allow it (optional safety)
    if (!requiredRole) {
      return true;
    }

    // 4. STRICT CHECK: Does User Role match Required Role?
    if (user.role === requiredRole) {
      return true; // Access Granted
    }

    // 5. IF MISMATCH: Redirect user to THEIR allowed module
    // If an Admin tries to go to SuperAdmin, send them back to Admin
    if (user.role === 'SuperAdmin') {
      this.router.navigate(['/super-admin']);
    } else {
      this.router.navigate(['/admin']);
    }

    return false; // Stop the original navigation
  }
}