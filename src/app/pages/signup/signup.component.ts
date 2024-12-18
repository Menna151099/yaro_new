import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AuthService } from '../../All_services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      displayName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator() });
  }

  // Custom validator for matching password and confirm password
  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { mismatch: true };
    };
  }

  // Form submission logic
  onSubmit() {
    if (this.signUpForm.valid) {
      const user = this.signUpForm.value;
      this.authService.signUp(user).subscribe({
        next: (response: any) => {
          this.toastr.success('Signup successful!', 'Success');
          this.router.navigate(['/home']);
        },
        error: (err: any) => {
          this.toastr.error('Signup failed! Please try again.', 'Error');
          console.error('Signup failed:', err);
        }
      });
    } else {
      this.toastr.warning('Please fill out the form correctly.', 'Warning');
    }
  }

  // Getter for easy access to form controls in the template
  get f() {
    return this.signUpForm.controls;
  }

  // Helper function to check for password mismatch error
  get passwordMismatch() {
    return this.signUpForm.hasError('mismatch') && this.signUpForm.get('confirmPassword')?.touched;
  }
}
