import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
