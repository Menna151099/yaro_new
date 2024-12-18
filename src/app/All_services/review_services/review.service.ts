import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
     providedIn: 'root',
})
export class ReviewService {
     private apiUrl = 'http://localhost:5000/api/reviews';

     constructor(private http: HttpClient, private authService: AuthService) { }

     addReview(tourId: string, reviewData: any, files: File[]): Observable<any> {
          const token = this.authService.getToken();

          const headers = new HttpHeaders({
               Authorization: `Bearer ${token}`,
          });

          const formData = new FormData();

          formData.append('rating', reviewData.rating);
          formData.append('comment', reviewData.comment);
          formData.append('userId', reviewData.userId);

          // Append media files
          files.forEach((file) => {
               formData.append('media', file);
          });

          return this.http.post<any>(`${this.apiUrl}/${tourId}`, formData, { headers });
     }

     getReviewsByTourId(tourId: string): Observable<any> {
          return this.http.get<any>(`${this.apiUrl}/${tourId}`);
     }
}
