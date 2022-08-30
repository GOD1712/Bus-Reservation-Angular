import { Time } from "@angular/common";
import { Bus } from "./Bus";

export class Schedule {
    constructor(
        public startingPoint: string,
        public destination: string,
        public fareAmount: number,
        public estimatedArrivalTime: Time,
        public departureTime: Time,
        public scheduleDate: Date,
        public bus: Bus
    ) { }
}