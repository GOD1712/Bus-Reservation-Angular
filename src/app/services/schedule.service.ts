import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../Entities/Schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  schedules: Schedule[] = [];
  private baseUrl: string = "http://localhost:8084/scheduledBus";

  constructor(private httpSer: HttpClient) { }


  getSchedules(startingPoint: string, destination: string, scheduleDate: string): Observable<any> {
    // return this.httpSer.get<Schedule[]>(this.baseUrl + "?startingPoint=" + startingPoint + "&destination=" + destination + "&scheduleDate=" + scheduleDate);
    return this.httpSer.get<Schedule[]>(this.baseUrl + "/schedules/" + startingPoint + "/" + destination + "/" + scheduleDate);
  }

  updateSchedules(schedules: Schedule[]) {
    this.schedules = schedules;
  }

  fetchLocalSchedules() {
    return this.schedules;
  }

  public addSchedule(s: Schedule): Observable<any> {
    return this.httpSer.post<Schedule>(this.baseUrl + "/addSchedule", s);
  }
}
