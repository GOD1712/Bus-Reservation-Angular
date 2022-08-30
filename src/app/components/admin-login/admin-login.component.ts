import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adForm!: FormGroup;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.adForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  get username() { return this.adForm.get('username') }
  get password() { return this.adForm.get('password') }

  onSubmit() {
    console.log(this.adForm.value);
    this.router.navigate(["/", "admin-dashboard"], { relativeTo: this.route });
  }
}
