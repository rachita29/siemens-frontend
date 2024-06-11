import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private baseUrl = 'http://localhost:3000/api/auth';

  constructor( private http: HttpClient,
    private router: Router) {

  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): any {
    this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        this.token = response.token as string;
        localStorage.setItem('token', this.token);
        this.redirectUser(response.role);
      })
    ).subscribe();
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

  private redirectUser(role: string) {
    if (role === 'teacher') {
      this.router.navigate(['/teacher-home']);
    } else if (role === 'student') {
      this.router.navigate(['/student-home']);
    } else {
      // handle other roles or default redirection
      this.router.navigate(['/']);
    }
  }
}
