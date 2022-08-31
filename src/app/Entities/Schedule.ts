import { Time } from "@angular/common";
import { Bus } from "./Bus";

export class Schedule {
    constructor(
        public startingPoint: string,
        public destination: string,
        public fareAmount: number,
        public scheduleDate: string,
        public estimatedArrivalTime: string,
        public departureTime: string,
        public bus: Bus
    ) { }
}