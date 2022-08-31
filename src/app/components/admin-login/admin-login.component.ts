import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adForm!: FormGroup;
  wrongData: boolean = false;
  msg: string = "";
  constructor(private router: Router,
    private route: ActivatedRoute,
    private adminSer: AdminService) { }

  ngOnInit(): void {
    this.adForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  get username() { return this.adForm.get('username') }
  get password() { return this.adForm.get('password') }

  onSubmit() {
    const formValues = this.adForm.value;
    this.adminSer.getAdmin(formValues.username).subscribe(
      (data) => {
        if (data.password === formValues.password) {
          this.router.navigate(["/", "admin-dashboard"], { relativeTo: this.route });
        }
        else {
          this.wrongData = true;
          this.msg = "Password is incorrect";
        }
      }
    );
  }
}
