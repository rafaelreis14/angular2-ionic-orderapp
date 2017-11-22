export class ProductModel{

  
    constructor(
        public productID:string,
        public description:string,
        public price:number,
        public salePrice: number, 
        public inicialDate: Date,
        public finalDate: Date,       
        public imageUrl:string,        
        public activated: boolean,
        public favorited: boolean,
        public activateDate: Date,
        public barcodes: string[]
    ){  };


     get discountPercent(): number{      
         return (this.salePrice * 100 / this.price)-100;
     }



}