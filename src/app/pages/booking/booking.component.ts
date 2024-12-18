import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderbookingComponent } from "../../componants/headerbooking/headerbooking.component";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../All_services/booking_services/Booking.service';
import { TourService } from '../../All_services/tour_services/tour.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [HeaderbookingComponent, ReactiveFormsModule, CommonModule, ToastrModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  tourId: string | null = null;
  tourDetails: any;
  totalPrice = 0;
  isLoading = false; 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private tourService: TourService,
    private toastr: ToastrService
  ) {
    this.bookingForm = this.fb.group({
      paymentName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      arrivalDate: ['', Validators.required],
      cellPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      departureDate: ['', Validators.required],
      tripLocation: ['', Validators.required],
      adults: [1, [Validators.required, Validators.min(1)]],
      children6To11: [0, [Validators.min(0)]],
      childrenUnder6: [0, [Validators.min(0)]],
      transportation: ['', Validators.required],
      guide: ['', Validators.required],
      car: ['', Validators.required],
      additionalQueries: [''],
      date: [new Date().toISOString().split('T')[0], Validators.required], // Default current date
      time: [new Date().toLocaleTimeString(), Validators.required], // Default current time
    });

    this.bookingForm.valueChanges.subscribe(() => this.calculatePrice());
  }

  ngOnInit(): void {
    this.tourId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.tourId) {
      this.loadTourDetails(this.tourId);
    } else {
      console.error('No tour ID provided in the route parameters.');
      alert('Invalid tour ID.');
      this.router.navigate(['/']);
    }
  }

  loadTourDetails(id: string): void {
    this.isLoading = true; // Start loading
    this.tourService.getTourById(id).subscribe({
      next: (data) => {
        this.tourDetails = data;
        console.log('Tour Details Loaded:', this.tourDetails);
        this.bookingForm.patchValue({ tripLocation: this.tourDetails.city });
      },
      error: (err) => {
        console.error('Error fetching tour details:', err);
        this.toastr.error('Failed to load tour details.', 'Error');
      },
      complete: () => {
        this.isLoading = false; // End loading
      }
    });
  }

  calculatePrice(): void {
    if (!this.tourDetails || !this.tourDetails.prices) {
      this.totalPrice = 0;
      return;
    }

    const { prices } = this.tourDetails;
    const { adults = 0, children6To11 = 0, childrenUnder6 = 0, transportation = '' } = this.bookingForm.value;

    const pricingKey = transportation === 'privateTourWithLunch' ? 'privateTourWithLunch' : 'privateTourWithoutLunch';
    const pricing = prices[pricingKey] || { single: 0, childSixToEleven: 0, childUnderSix: 0 };

    const adultPrice = adults * pricing.single;
    const child6To11Price = children6To11 * pricing.childSixToEleven;
    const childUnder6Price = childrenUnder6 * pricing.childUnderSix;

    this.totalPrice = adultPrice + child6To11Price + childUnder6Price;
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      this.isLoading = true; // Start loading

      const userId = JSON.parse(localStorage.getItem('currentUser') || '{}').user?.id;
      if (!userId) {
        this.toastr.warning('User not logged in. Please log in first.', 'Warning');
        this.isLoading = false; // End loading
        return;
      }

      const bookingData = {
        ...this.bookingForm.value,
        tourId: this.tourId,
        amount: this.totalPrice,
        userId: userId,
      };

      this.bookingService.createBooking(bookingData).subscribe({
        next: (response) => {
          console.log('Booking added successfully:', response);
          this.toastr.success('Booking added successfully.', 'Success');
        },
        error: (error) => {
          console.error('Error adding booking:', error);
          this.toastr.error('Failed to add booking.', 'Error');
        },
        complete: () => {
          this.isLoading = false; // End loading
        }
      });

    } else {
      this.toastr.warning('Please fill all required fields correctly.', 'Warning');
    }
  }
}
