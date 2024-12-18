import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
     providedIn: 'root',
})
export class BookingService {
     private apiUrl = 'http://localhost:5000/api/bookings'; // Adjust the URL based on your backend

     constructor(private http: HttpClient) { }

     // Create a new booking
     createBooking(data: any): Observable<any> {
          return this.http.post(`${this.apiUrl}`, data, this.getAuthHeaders());
     }


     // Helper to get Authorization headers
     private getAuthHeaders(): { headers: HttpHeaders } {
          const token = localStorage.getItem('authToken');
          return {
               headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
               }),
          };
     }
}
