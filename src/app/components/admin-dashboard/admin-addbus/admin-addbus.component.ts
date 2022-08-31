import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bus } from 'src/app/Entities/Bus';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-admin-addbus',
  templateUrl: './admin-addbus.component.html',
  styleUrls: ['./admin-addbus.component.css']
})
export class AdminAddbusComponent implements OnInit {
  busForm!: FormGroup;
  bus!: Bus;
  constructor(
    private busSer: BusService
  ) { }

  ngOnInit(): void {
    this.busForm = new FormGroup({
      plateNo: new FormControl("", Validators.required),
      seats: new FormControl("", Validators.required),
      busType: new FormControl("")
    })
  }

  get plateNo() { return this.busForm.get('plateNo') }
  get seats() { return this.busForm.get('seats') }

  onSubmit() {
    const formValues = this.busForm.value;
    this.bus = new Bus(formValues.plateNo, formValues.seats, formValues.busType, []);
    this.busSer.addBus(this.bus).subscribe(
      (data) => {
        console.log(data);
        sessionStorage.setItem("busData", JSON.stringify(data));
        alert("Bus was added successfully!");
      }
    );
  }


}
