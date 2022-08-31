import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from '../Entities/Bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  constructor(private httpSer: HttpClient) { }

  private baseUrl: string = "http://localhost:8084/bus";

  public addBus(b: Bus): Observable<any> {
    return this.httpSer.post<Bus>(this.baseUrl + "/addBus", b);
  }
}
