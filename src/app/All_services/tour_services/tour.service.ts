import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private apiUrl = 'http://localhost:5000/api/tours';

  constructor(private http: HttpClient) { }

  getAllTours(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getTourById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
