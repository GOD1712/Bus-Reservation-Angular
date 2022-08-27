import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      fullName: new FormControl(""),
      userName: new FormControl(""),
      password: new FormControl(""),
      gender: new FormControl(""),
      dob: new FormControl(""),
      email: new FormControl(""),
      mobileNo: new FormControl(""),
      address: new FormControl("")
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
