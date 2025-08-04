import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm!: FormGroup;
  submitted = false;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.submitted = true;
      alert("Registration Successful!")
    }
  }
}
