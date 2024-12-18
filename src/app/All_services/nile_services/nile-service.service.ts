import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NileServiceService {
  private apiUrl = 'http://localhost:5000/api/nile';

  constructor(private http: HttpClient) { }

  getnile(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}
