export class User {
    constructor(
        public userName: string,
        public fullName: string,
        public password: string,
        public gender: string,
        public address: string,
        public email: string,
        public contactNo: string,
        public dob: Date,
    ) { }
}