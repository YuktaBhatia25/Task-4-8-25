import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  students : Student[] = []

  display:boolean = true;
  studentForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.studentForm = this.fb.group({
       name: new FormControl('', [
        Validators.required
      ]),
      college: new FormControl('', [
        Validators.required,
      ]),
      marks: new FormControl('', [
        Validators.required,
      ]),
    })
  }
  click():void{
    this.display = !this.display
  }
  onSubmit():void{
    const newStudent: Student = {
      name: this.studentForm.value.name,
      college: this.studentForm.value.college,
      marks: this.studentForm.value.marks,
    };
    this.students = [...this.students, newStudent]
  }
}
export interface Student{
  name: string;
  college: string;
  marks: number
}
