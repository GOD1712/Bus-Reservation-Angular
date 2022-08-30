import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.css']
})
export class AdminScheduleComponent implements OnInit {
  updateForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      spoint: new FormControl("", Validators.required),
      destination: new FormControl("", Validators.required),
      fareAmount: new FormControl("", Validators.required),
      arrivalTime: new FormControl("", Validators.required),
      depTime: new FormControl("", Validators.required),
      sheduleDate: new FormControl("", Validators.required),
    })
  }

  get spoint() { return this.updateForm.get('spoint') }
  get destination() { return this.updateForm.get('destination') }
  get fareAmount() { return this.updateForm.get('fareAmount') }
  get arrivalTime() { return this.updateForm.get('arrivalTime') }
  get depTime() { return this.updateForm.get('depTime') }
  get sheduleDate() { return this.updateForm.get('sheduleDate') }

  onSubmit() {
    console.log(this.updateForm.value)
  }

}
