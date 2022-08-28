import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from 'src/app/Entities/Schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @Input() schedules: Schedule[] = [];

  constructor(private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  goToSeats() {
    this.router.navigate(['/', 'seats'], { relativeTo: this.route });
  }

}
