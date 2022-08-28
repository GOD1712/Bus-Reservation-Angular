import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/Entities/Schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-book-bus',
  templateUrl: './book-bus.component.html',
  styleUrls: ['./book-bus.component.css']
})
export class BookBusComponent implements OnInit {
  schedules: Schedule[] = [];

  showAvailableBuses: boolean = false;

  constructor(private scheduleSer: ScheduleService) { }

  ngOnInit(): void {
  }

  fetchedBuses(e: any) {
    this.showAvailableBuses = e;
    this.schedules = this.scheduleSer.fetchLocalSchedules();
  }

}
