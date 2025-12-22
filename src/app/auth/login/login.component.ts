import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Admins } from '../../core/models/admin.model';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private auth: AuthService, private toastr: NbToastrService, private route: Router) {
    if (this.auth.isLoggesIn()) {
      const user = this.auth.getLoggedUser();

      // Redirect based on the parsed user object role
      if (user.role === 'SuperAdmin') {
        this.route.navigate(['/super-admin']);
      } else {
        this.route.navigate(['/admin']);
      }
    }
  }

  username: string = '';
  password: string = '';

  onlogin() {
    const user: Admins | any = this.auth.login(this.username, this.password);

    if (!user) {
      this.toastr.warning("user does not exist", 'invalid credentials');
      console.log(user);
      return;
    }
    if (user.role === "SuperAdmin") {
      this.route.navigate(['/super-admin'], { replaceUrl: true });
      console.log('SuperAdmin');
    } else {
      this.route.navigate(['/admin'], { replaceUrl: true });
      console.log('admin redirect');

    }
  }

  showPassword = true;
  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
