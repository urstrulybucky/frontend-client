import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  signupData = { username: '', email: '', password: '', confirmPassword: '' };

  constructor() { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Send the signup data to your backend or perform other actions
      console.log('Form submitted:', this.signupData);
    }
  }

}
