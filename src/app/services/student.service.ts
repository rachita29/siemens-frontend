import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:3000/api/students';

  constructor(private http: HttpClient, private authService: AuthService) { }

  takeExam(classId: string) {
    return this.http.get(`${this.baseUrl}/take-exam/${classId}`, {
      headers: { Authorization: `Bearer ${this.authService.getToken()}` }
    });
  }

  getClasses(classId: string) {
    return this.http.get(`${this.baseUrl}/classes/${classId}`, {
      headers: { Authorization: `Bearer ${this.authService.getToken()}` }
    });
  }

  generatePdf(examData: any) {
    return this.http.post(`${this.baseUrl}/generate-pdf`, { examData }, {
      headers: { Authorization: `Bearer ${this.authService.getToken()}` }
    });
  }
}
