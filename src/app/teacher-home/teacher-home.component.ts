import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss']
})
export class TeacherHomeComponent {
  classForm: FormGroup;
  selectedFile: File | null = null;
  classId: string = ''

  constructor(private fb: FormBuilder, private teacherService: TeacherService) {
    this.classForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }

  onClassSubmit() {
    if (this.classForm.valid) {
      this.teacherService.createClass(this.classForm.value).subscribe((data: any) => {
       this.classId = data._id;
       alert(`Test for class ${this.classForm.getRawValue().name} and Subject ${this.classForm.getRawValue().subject} has been created. \n Please upload question paper now.`);

      });
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.teacherService.uploadQuestions(this.classId, this.selectedFile).subscribe();
      alert(`Questions have been uploaded successfully`)
    }
  }
}
