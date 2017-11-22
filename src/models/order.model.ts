import { ItemModel } from './item.model';
import { CustomerModel } from "./customer.model";
import { AddressModel } from "./address.model";
import { SellerModel } from "./seller.model";
import { PaymentModel } from "./payment.model";

export enum OrderType{
    internal = 0,
    pool = 1,
    negociation = 2

}


export class OrderModel {
    constructor(
        public orderNumber: string
    ){
        this.discount = 0;
        this.orderType = OrderType.negociation;
        this.deliveyAddress = null;
        this.itens = [];;
        this.payments = []; 
        this.customer = null;
        this.seller = null;
        this.date = new Date();
        this.remainingValue = 0;
    }


    public date:Date;
    public customer: CustomerModel;
    public seller: SellerModel;
    public deliveyAddress: AddressModel;
    public itens: ItemModel[];
    public payments: PaymentModel[];     
    public orderType: OrderType;    
    public discount: number; 
    public expense: number;
    public transportExpense: number;
    public remainingValue: number;

    


    get grossTotal(): number{
        return this.itens       
            .reduce((sum, item) => sum + item.total, 0);

    }

    get netTotal(): number{        
        return parseFloat((this.grossTotal - this.discount - this.discountPROMO).toFixed(2));
    }

    get discountPROMO(): number{
        return this.itens
            .reduce((sum, item) => sum + item.discountPromo, 0)
    }
}