import { Schedule } from "./Schedule";
import { User } from "./User";

export class Booking {
    constructor(
        public schedule: Schedule,
        public user: User,
        public noOfSeats: number,
        public fareAmount: number,
        public totalAmount: number,
        public dateOfBooking: string,
        public bookingStatus: string,
    ) { }
}