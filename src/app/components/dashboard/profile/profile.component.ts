import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/Entities/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  userData!: User;
  fieldsDisabled: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const data = sessionStorage.getItem("userData");
    this.userData = data === null ? null : JSON.parse(data);

    this.profileForm = new FormGroup({
      name: new FormControl(this.userData.userName),
      dob: new FormControl(this.userData.dob),
      gender: new FormControl(this.userData.gender),
      contactNo: new FormControl(this.userData.contactNo),
      email: new FormControl(this.userData.email),
      address: new FormControl(this.userData.address)
    });

    this.disableFields();

  }

  disableFields() {
    this.profileForm.controls["name"].disable();
    this.profileForm.controls["dob"].disable();
    this.profileForm.controls["gender"].disable();
    this.profileForm.controls["contactNo"].disable();
    this.profileForm.controls["email"].disable();
    this.profileForm.controls["address"].disable();
  }

  enableFields() {
    this.profileForm.controls["name"].enable();
    this.profileForm.controls["dob"].enable();
    this.profileForm.controls["gender"].enable();
    this.profileForm.controls["contactNo"].enable();
    this.profileForm.controls["email"].enable();
    this.profileForm.controls["address"].enable();
  }

  onClick() {
    this.enableFields();
    this.fieldsDisabled = false;
  }

  onSubmit() {
    const formData = this.profileForm.value;
    const updatedUser = new User(formData.name, this.userData.fullName, this.userData.password, formData.gender, formData.address, formData.email, this.userData.contactNo, formData.dob);
    this.userService.updateUser(updatedUser).subscribe(
      (data) => {
        sessionStorage.setItem("userData", data);
      }
    );
    this.disableFields();
    this.fieldsDisabled = true;
  }

  cancel() {
    this.disableFields();
    this.fieldsDisabled = true;
  }

}
