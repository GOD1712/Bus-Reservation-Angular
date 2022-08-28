import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Entities/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user!: User;
  errorOccured: boolean = false;
  msg: string = "";

  constructor(private UserSer: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(""),
      password: new FormControl("")
    })
  }

  onSubmit() {
    const formValues = this.loginForm.value;
    this.UserSer.getUserByName(formValues.name).subscribe(
      (data) => {
        if (data === null) {
          this.msg = "Incorrect Username";
          this.errorOccured = true;
        }
        else {
          this.user = data[0];
          if (this.user.password !== formValues.password) {
            this.msg = "Incorrect Password";
            this.errorOccured = true;
          }
          else {
            sessionStorage.setItem("userData", JSON.stringify(this.user));
            this.router.navigate(["../"], { relativeTo: this.route });
          }
        }
      }
    )
  }

}
