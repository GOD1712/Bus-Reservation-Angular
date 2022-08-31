import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../Entities/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpSer: HttpClient) { }

  private baseUrl: string = "http://localhost:8084/admin";

  public getAdmin(name: string): Observable<any> {
    return this.httpSer.get<Admin>(this.baseUrl + "/getAdminName/" + name);
  }

}
