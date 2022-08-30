import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/Entities/Booking';
import { Payment } from 'src/app/Entities/Payment';
import { BookingService } from 'src/app/services/booking.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  paymentForm!: FormGroup;
  isWalletSelected: boolean = false;
  bookingData!: Booking;
  noOfTickets: number = 0;
  ticketPrice: number = 0;
  totalAmount: number = 0;
  seats: string[] = [];

  constructor(
    private bookingSer: BookingService,
    private paymentSer: PaymentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paymentForm = new FormGroup({
      username: new FormControl(""),
      email: new FormControl(""),
      address: new FormControl(""),
      country: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl(""),
      paymentMethod: new FormControl(""),
      nameOnCard: new FormControl(""),
      ccNumber: new FormControl(""),
      ccExpiration: new FormControl(""),
      cvv: new FormControl("")
    });

    const booking = sessionStorage.getItem("bookingData");
    this.bookingData = booking !== null ? JSON.parse(booking) : null;
    this.noOfTickets = this.bookingData.noOfSeats;
    this.ticketPrice = this.bookingData.fareAmount;
    this.totalAmount = this.bookingData.totalAmount;

    const seatsData = sessionStorage.getItem("seats");
    this.seats = seatsData !== null ? JSON.parse(seatsData).seats : null;

  }

  onClickCard() {
    this.isWalletSelected = false;
  }

  onClickWallet() {
    this.isWalletSelected = true;
  }

  onSubmit() {
    const formValues = this.paymentForm.value;

    const newPayment = new Payment(this.bookingData, this.bookingData.dateOfBooking, formValues.paymentMethod, this.bookingData.totalAmount);

    this.bookingSer.addBooking(this.bookingData).subscribe(
      (data) => console.log(data)
    );

    this.paymentSer.addPayment(newPayment).subscribe(
      (data) => console.log(data)
    );

    //this.router.navigate(["/", "feedback"], { relativeTo: this.route });
  }

}
