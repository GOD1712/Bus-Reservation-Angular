import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    var doc = new jsPDF();
    doc.text("Bus Ticket", 10, 10);
    var rows: any = [];

    var rowCountModNew = [
      ["Id", "1721"],
      ["Starting Point", "Pune"],
      ["Destination", "Mumbai"],
      ["Depature Date and Time", "2022-09-17 16:22",],
      ["Arrival Date and Time", "2022-09-17 19:30"],
      ["No. of Seats", "4"],
      ["Amount Paid", "5200"]
    ]


    rowCountModNew.forEach(element => {
      rows.push(element);

    });

    autoTable(doc, {
      body: rows,
      didDrawCell: (data) => { },
    });
    doc.save('Ticket.pdf');
  }

}
