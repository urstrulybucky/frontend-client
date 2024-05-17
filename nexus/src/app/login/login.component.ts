import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  loginData = { username: '', password: '' };

  constructor(private authService: AuthService) { }

  login(loginForm: NgForm): void {
    if (loginForm.valid) {
      console.log(this.loginData);

      this.authService.login(this.loginData).subscribe(
        response => {
          // Handle successful login
          console.log('Login successful:', response);
        },
        error => {
          // Handle login error
          console.error('Login error:', error);
          console.log(error["error"]["detail"])
        }
      );
    }
  }
}
