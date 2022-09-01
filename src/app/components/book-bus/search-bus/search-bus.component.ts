import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {
  busSearchForm!: FormGroup;
  @Output() fetchBusDetails: EventEmitter<boolean> = new EventEmitter<boolean>();
  cities: string[] = ["Pune", "Mumbai", "Bangalore"];

  constructor(private scheduleSer: ScheduleService) { }

  ngOnInit(): void {
    this.busSearchForm = new FormGroup({
      startingPoint: new FormControl(""),
      departureDate: new FormControl(""),
      destination: new FormControl(""),
      arrivalDate: new FormControl("")
    });
  }

  onSubmit() {
    const formValues = this.busSearchForm.value;
    // this.scheduleSer.getSchedules(formValues.startingPoint, formValues.destination, formValues.departureDate.split('T')[0]).subscribe(
    //   (data) => {
    //     this.scheduleSer.updateSchedules(data);
    //   }
    // );
    this.scheduleSer.getSchedules(formValues.startingPoint, formValues.destination).subscribe(
      (data) => {
        this.scheduleSer.updateSchedules(data);
      }
    );
    this.fetchBusDetails.emit(true);
  }

}
