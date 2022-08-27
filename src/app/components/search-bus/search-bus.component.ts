import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {
  busSearchForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.busSearchForm = new FormGroup({
      startingPoint: new FormControl(""),
      departureDate: new FormControl(""),
      destination: new FormControl(""),
      arrivalDate: new FormControl("")
    });
  }

  onSubmit() {
    console.log(this.busSearchForm.value);
  }

}
