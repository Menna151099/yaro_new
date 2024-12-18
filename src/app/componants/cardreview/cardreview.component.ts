import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReviewService } from '../../All_services/review_services/review.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../All_services/auth.service';
import { UsersService } from '../../All_services/user_services/users.service';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute

@Component({
  selector: 'app-cardreview',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cardreview.component.html',
  styleUrls: ['./cardreview.component.css'],
})
export class CardreviewComponent implements OnInit {
  reviewForm: FormGroup;
  selectedFiles: File[] = [];
  id: string = '';
  @Input() reviews: any[] = [];

  usersCache: { [userId: string]: any } = {};
  averageRating: number = 0;  // Store the average rating
  totalReviews: number = 0;   // Store the total number of reviews

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private reviewService: ReviewService,
    private usersService: UsersService,  // Inject UsersService
    private activatedRoute: ActivatedRoute  // Inject ActivatedRoute

  ) {
    this.reviewForm = this.fb.group({
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      comment: ['', [Validators.required, Validators.minLength(10)]],
      userId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Extract tourId from route parameters
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';  // 'tourId' is the parameter name in the route

      // Fetch reviews for the tour using the tourId
      if (this.id) {
        this.reviewService.getReviewsByTourId(this.id).subscribe((reviews: any[]) => {
          this.reviews = reviews;
          this.fetchUsersData(reviews);  // Fetch user data for each review
          this.calculateAverageRating();  // Calculate the average rating
        });
      }
    });


    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.user && currentUser.user.id) {
      this.reviewForm.patchValue({
        userId: currentUser.user.id,
      });
    } else {
      console.error('User is not logged in or user ID is missing.');
    }
  }

  calculateAverageRating(): void {
    if (this.reviews.length > 0) {
      const totalRating = this.reviews.reduce((acc, review) => acc + review.rating, 0);
      this.averageRating = totalRating / this.reviews.length;
      this.totalReviews = this.reviews.length;
    } else {
      this.averageRating = 0;
      this.totalReviews = 0;
    }
  }

  // Fetch user data for each review if not already in cache
  fetchUsersData(reviews: any[]): void {
    reviews.forEach((review) => {
      console.log(review);

      if (!this.usersCache[review.userId]) {
        this.usersService.getUserById(review.user._id).subscribe((userData) => {
          this.usersCache[review.userId] = userData;  // Cache user data
        });
      }
    });
  }

  onFileSelect(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
  }

  submitReview(): void {
    if (this.reviewForm.valid) {
      const reviewData = this.reviewForm.value;

      this.reviewService.addReview(this.id, reviewData, this.selectedFiles).subscribe({
        next: (response) => {
          console.log('Review submitted successfully:', response);

          // Clear the form and selected files
          this.reviewForm.reset();
          this.selectedFiles = [];

          // Optionally update local review list
          this.reviews.push(response.review);
          this.fetchUsersData([response.review]);  // Fetch user data for the new review
          this.calculateAverageRating();  // Recalculate the average rating
        },
        error: (error) => {
          console.error('Error submitting review:', error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  getUserData(userId: string): any {
    return this.usersCache[userId];  // Retrieve user data from cache
  }
}
