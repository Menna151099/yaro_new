import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';
  private currentUserSubject = new BehaviorSubject<any>(
    JSON.parse(localStorage.getItem('currentUser') || '{}')
  );
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { email, password }).pipe(
      map((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('authToken', user.token);
        this.currentUserSubject.next(user);
        return user;
      }),
      catchError((err) => {
        console.error('Login failed', err);
        throw err;
      })
    );
  }

  signUp(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, user).pipe(
      map((response) => response),
      catchError((err) => {
        console.error('Signup failed', err);
        throw err;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
}
