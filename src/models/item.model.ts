import { ProductModel } from './product.model';

export class ItemModel{
    constructor(
        public itemId:number,
        public product: ProductModel,
        public quantity: number,
        public discountPromo: number,        
        public price: number,
        public whereToTake: string
    ){}

    get total(): number{
        return (this.quantity * this.price)-this.discountPromo;
    }
}