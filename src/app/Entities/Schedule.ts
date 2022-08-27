import { Time } from "@angular/common";

export class Bus {
    constructor(
        public scheduleId: number,
        public startingPoint: string,
        public destination: string,
        public fareAmount: number,
        public estimatedArrivalTime: Time,
        public departureTime: Time,
        public scheduleDate: Date,
    ) { }
}