import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Payment } from '../Entities/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpSer: HttpClient) { }

  private baseUrl: string = "http://localhost:8084/payment";

  public addPayment(p: Payment): Observable<any> {
    return this.httpSer.post<Payment>(this.baseUrl + "/addpayments", p);
  }
}
