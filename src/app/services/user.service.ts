import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Entities/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpSer: HttpClient) { }

  private baseUrl: string = "http://localhost:3000/users";

  public addUser(user: User): Observable<any> {
    return this.httpSer.post<User>(this.baseUrl, user);
  }

  public getUserByName(name: string): Observable<any> {
    return this.httpSer.get<User>(this.baseUrl + "?userName=" + name);
  }
}
