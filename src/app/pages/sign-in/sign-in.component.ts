import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { PasswordMatchDirective } from '../../directives/password-match.directive';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [NgIf, FormsModule, NgClass],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  passwordVisible = false;
  confirmPasswordVisible = false;

  togglePasswordVisibility(passwordInput: HTMLInputElement) {
    this.passwordVisible = !this.passwordVisible;
    passwordInput.type = this.passwordVisible ? 'text' : 'password';
  }

  toggleConfirmPasswordVisibilty(passwordInput: HTMLInputElement){
    this.confirmPasswordVisible = !this.confirmPasswordVisible
    passwordInput.type = this.confirmPasswordVisible ? 'text' : 'password';
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    }
  }
}
