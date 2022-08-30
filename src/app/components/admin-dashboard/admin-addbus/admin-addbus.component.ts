import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-addbus',
  templateUrl: './admin-addbus.component.html',
  styleUrls: ['./admin-addbus.component.css']
})
export class AdminAddbusComponent implements OnInit {
  busForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.busForm = new FormGroup({
      details: new FormControl("", Validators.required),
      plateNo: new FormControl("", Validators.required),
      seats: new FormControl("", Validators.required),
      busType: new FormControl("")
    })
  }

  get details() { return this.busForm.get('details') }
  get plateNo() { return this.busForm.get('plateNo') }
  get seats() { return this.busForm.get('seats') }

  onSubmit() {
    console.log(this.busForm.value)
  }


}
