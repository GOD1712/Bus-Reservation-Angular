import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  seatsSelected: string[] = [];

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToCheckout() {
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
    console.log(this.seatsSelected);
  }

}
