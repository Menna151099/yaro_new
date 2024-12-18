import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderbookingComponent } from "../../componants/headerbooking/headerbooking.component";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../All_services/booking_services/Booking.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-booking-nile',
  standalone: true,
  imports: [HeaderbookingComponent, ReactiveFormsModule, CommonModule, ToastrModule],
  templateUrl: './booking-nile.component.html',
  styleUrl: './booking-nile.component.css'
})
export class BookingNileComponent implements OnInit{
  bookingForm: FormGroup;
  totalPrice: number = 0;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bookingService: BookingService,
    private toastr: ToastrService
  ) {
    this.bookingForm = this.fb.group({
      paymentName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cellPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      adults: [1, [Validators.required, Validators.min(1)]],
      additionalQueries: [''],
      date: [new Date().toISOString().split('T')[0], Validators.required],
      time: [formatDate(new Date(), 'HH:mm', 'en-US'), Validators.required],
    });

    this.bookingForm.valueChanges.subscribe(() => this.calculatePrice());
  }

  ngOnInit(): void {}

  calculatePrice(): void {
    const { adults } = this.bookingForm.value;
    const pricePerAdult = 500;
    this.totalPrice = adults * pricePerAdult;
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      this.isLoading = true;

      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const userId = currentUser?.user?.id;

      if (!userId) {
        this.toastr.warning('User not logged in. Please log in first.', 'Warning');
        this.isLoading = false;
        return;
      }

      const bookingData = {
        ...this.bookingForm.value,
        amount: this.totalPrice,
        userId: userId,
      };

      this.bookingService.createBooking(bookingData).subscribe({
        next: () => {
          this.toastr.success('Booking added successfully.', 'Success');
          this.resetForm();
        },
        error: (err) => {
          console.error('Booking Error:', err);
          this.toastr.error('Failed to add booking.', 'Error');
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    } else {
      this.toastr.warning('Please fill all required fields correctly.', 'Warning');
    }
  }

  resetForm(): void {
    this.bookingForm.reset({
      paymentName: '',
      email: '',
      cellPhone: '',
      adults: 1,
      additionalQueries: '',
      date: new Date().toISOString().split('T')[0],
      time: formatDate(new Date(), 'HH:mm', 'en-US'),
    });
    this.totalPrice = 0; 
  }
}
