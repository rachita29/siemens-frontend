import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private baseUrl = 'http://localhost:3000/api/teachers';

  constructor(private http: HttpClient, private authService: AuthService) { }

  createClass(classData: any) {
    return this.http.post(`${this.baseUrl}/classes`, classData, {
      headers: { Authorization: `Bearer ${this.authService.getToken()}` }
    });
  }

  uploadQuestions(classId: string, file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/upload/${classId}`, formData, {
      headers: { Authorization: `Bearer ${this.authService.getToken()}` }
    });
  }
}
