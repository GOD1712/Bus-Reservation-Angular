import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Entities/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private UserSer: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      fullName: new FormControl("", Validators.required),
      userName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      dob: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.email]),
      mobileNo: new FormControl("", [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      address: new FormControl("", [Validators.required, Validators.minLength(10)])
    });
  }

  get fullName() { return this.registrationForm.get('fullName') }
  get userName() { return this.registrationForm.get('userName') }
  get password() { return this.registrationForm.get('password') }
  get gender() { return this.registrationForm.get('gender') }
  get dob() { return this.registrationForm.get('dob') }
  get email() { return this.registrationForm.get('email') }
  get mobileNo() { return this.registrationForm.get('mobileNo') }
  get address() { return this.registrationForm.get('address') }

  onSubmit() {
    const formValues = this.registrationForm.value;
    const user = new User(formValues.userName, formValues.fullName,
      formValues.password, formValues.gender, formValues.address,
      formValues.email, formValues.contactNo, formValues.dob);
    this.UserSer.addUser(user).subscribe(
      (data) => {
        sessionStorage.setItem("userData", JSON.stringify(data));
        this.router.navigate(["../"], { relativeTo: this.route });
      }
    );
  }
}
