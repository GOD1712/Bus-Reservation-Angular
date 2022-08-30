import { Booking } from "./Booking";

export class Payment {
    constructor(
        public booking: Booking,
        public paymentDate: string,
        public paymentMethod: string,
        public amountPaid: number
    ) { }
}