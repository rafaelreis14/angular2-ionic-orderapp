import { AddressModel } from "./address.model";

export class CustomerModel {
    constructor(
        public customerID: string,
        public name: string,
        public store: string,
        public address: AddressModel
    ){}
}