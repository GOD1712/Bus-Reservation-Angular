import { Time } from "@angular/common";

export class Schedule {
    constructor(
        public id: number,
        public busId: number,
        public startingPoint: string,
        public destination: string,
        public fareAmount: number,
        public estimatedArrivalTime: Time,
        public departureTime: Time,
        public scheduleDate: Date,
    ) { }
}