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
    if (localStorage.getItem('loggedUser') === "admin") {
      this.route.navigate(['/admin']);
    }else{
      this.route.navigate(['/super-admin'])
    }
  }

  username: string = '';
  password: string = '';

  onlogin() {
    const user: Admins | null = this.auth.login(this.username, this.password);

    if (!user) {
      this.toastr.warning("username or password is wrong", 'invalid credentials');
      console.log(user);
      return;
    }
    if (user.role === "super-admin") {
      this.route.navigate(['/super-admin']);
    } else {
      this.route.navigate(['/admin']);
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
