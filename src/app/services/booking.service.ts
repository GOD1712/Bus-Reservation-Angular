import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Booking } from '../Entities/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpSer: HttpClient) { }

  private baseUrl: string = "http://localhost:8084/booking";

  public addBooking(b: Booking): Observable<any> {
    return this.httpSer.post<Booking>(this.baseUrl + "/createBooking", b);
  }
}
