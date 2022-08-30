import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/Entities/Booking';
import { Bus } from 'src/app/Entities/Bus';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seatsSelected: string[] = [];
  noOfSeatsSelected = 0;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private bookingSer: BookingService) { }

  ngOnInit(): void {
  }

  formatDate(date: any) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  goToCheckout() {
    const scheduleData = sessionStorage.getItem("scheduleData");
    const parsedDataSchedule = scheduleData !== null ? JSON.parse(scheduleData) : null;
    const userData = sessionStorage.getItem("userData");
    const parsedDataUser = userData !== null ? JSON.parse(userData) : null;
    //parsedDataSchedule.bus = new Bus(2, "MH13AS2345", 20, "AC", []);
    const newBooking = new Booking(
      parsedDataSchedule, parsedDataUser, this.noOfSeatsSelected,
      parsedDataSchedule.fareAmount, parsedDataSchedule.fareAmount * this.noOfSeatsSelected,
      this.formatDate(new Date()), "active");

    sessionStorage.setItem("bookingData", JSON.stringify(newBooking));
    sessionStorage.setItem("seats", JSON.stringify({ seats: this.seatsSelected }));

    // this.bookingSer.addBooking(newBooking).subscribe(
    //   (data) => console.log(data)
    // );

    this.router.navigate(["/", "payment"], { relativeTo: this.route });
  }

  onClick(seatPos: any, seatNo: any, seatElement: HTMLElement) {
    const seat = seatPos + seatNo;
    if (this.seatsSelected.includes(seat)) {
      this.seatsSelected = this.seatsSelected.filter((s) => s !== seat);
      seatElement.style.opacity = "1";
    }
    else {
      this.seatsSelected.push(seat);
      seatElement.style.opacity = "0.5";
    }
    this.noOfSeatsSelected = this.seatsSelected.length;
  }

}
