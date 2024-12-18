import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../All_services/booking_services/Booking.service';

@Component({
  selector: 'app-booking-describe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-describe.component.html',
  styleUrls: ['./booking-describe.component.css'],
})
export class BookingDescribeComponent {
  bookingForm: FormGroup;
  places = ['Cairo', 'Siwa', 'Luxor', 'Aswan', 'Fayoum', 'Alexandria', 'Hurghada', 'Sharm El-Sheikh', 'Bahariya Oasis'];
  transportation = ['Car', 'Plane'];

  constructor(private fb: FormBuilder, private bookingSetvice: BookingService) {
    this.bookingForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      arrivalDate: ['', Validators.required],
      departureDate: ['', Validators.required],
      tripLocation: ['', Validators.required],
      adults: [1, [Validators.required, Validators.min(1)]],
      children: [0, [Validators.min(0)]],
      transportation: ['', Validators.required],
      hours: [1, [Validators.required, Validators.min(1)]],
      language: ['', Validators.required],
      guide: ['', Validators.required],
      car: ['', Validators.required],
      additionalQueries: [''],
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      // const bookingData = {
      //   userId,
      //   fullName: this.bookingForm.value.fullName,
      //   date: this.bookingForm.value.email,
      //   time: this.bookingForm.value.arrivalDate,
      //   cellPhone: this.bookingForm.value.departureDate,
      // };
    } else {
      console.log('Form Invalid:', this.bookingForm.errors);
      alert('Please fill all required fields correctly.');
    }
  }
}
