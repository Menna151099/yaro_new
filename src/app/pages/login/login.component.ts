import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../All_services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  loginError: string | null = null;
  passwordVisible = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  // Toggle password visibility
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  // Form submission logic
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginError = null;

      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: () => {
          this.toastr.success('Login successful!', 'Success');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.toastr.error('Login failed! Check your credentials and try again.', 'Error');
          console.error('Login failed:', err);
          this.loginError = 'Invalid credentials. Please try again.';
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    } else {
      this.toastr.warning('Please fill in all required fields correctly.', 'Warning');
    }
  }

  // Getter for form controls for easier access in the template
  get f() {
    return this.loginForm.controls;
  }
}
