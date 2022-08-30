export class Bus {
    constructor(
        public busId: number,
        public busPlateNo: string,
        public capacity: number,
        public busType: string,
        public alreadyBookedSeats: string[]
    ) { }
}