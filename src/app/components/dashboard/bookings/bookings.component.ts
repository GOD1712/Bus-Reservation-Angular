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
    var col = [["Id", "TypeID", "Accnt", "Amnt", "Start", "End", "Contrapartida"]];
    var rows: any = [];

    var rowCountModNew = [
      ["1721079361", "0001", "2100074911", "200", "22112017", "23112017", "51696"],
      ["1721079362", "0002", "2100074912", "300", "22112017", "23112017", "51691"],
      ["1721079363", "0003", "2100074913", "400", "22112017", "23112017", "51692"],
      ["1721079364", "0004", "2100074914", "500", "22112017", "23112017", "51693"]
    ]


    rowCountModNew.forEach(element => {
      rows.push(element);

    });

    autoTable(doc, {
      head: col,
      body: rows,
      didDrawCell: (data) => { },
    });
    doc.save('Test.pdf');
  }

}
