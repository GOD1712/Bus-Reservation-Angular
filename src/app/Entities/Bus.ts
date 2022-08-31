export class Bus {
    constructor(
        public busPlateNo: string,
        public capacity: number,
        public busType: string,
        public alreadyBookedSeats: string[]
    ) { }
}