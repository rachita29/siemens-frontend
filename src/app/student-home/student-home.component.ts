import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../services/student.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent {
  questions: any[] = [];

  constructor(private studentService: StudentService) { }

  takeExam(classId: string) {
    this.studentService.getClasses(classId).subscribe((data: any) => {
      this.studentService.takeExam(data[0]._id).subscribe((data: any) => {
        this.questions = data;
      });
    })
  }

  generatePdf() {
    this.studentService.generatePdf(this.questions).subscribe((data) => {
      alert("PDF generated successfully");
    });
  }


}
