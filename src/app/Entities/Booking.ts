export class Booking {
    constructor(
        public bookingId: number,
        public noOfSeats: number,
        public fareAmount: number,
        public totalAmount: number,
        public dateOfBooking: Date,
        public bookingStatus: string,
    ) { }
}