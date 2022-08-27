export class Payment {
    constructor(
        public paymentId: number,
        public paymentDate: Date,
        public paymentMethod: string,
        public amountPaid: number
    ) { }
}