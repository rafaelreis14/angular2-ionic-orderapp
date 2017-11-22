export enum PaymentType{
    Nenhum=0,
    Dinheiro=1,
    Credito=2,
    Debito=3
}

export class PaymentModel{
    constructor(public type: PaymentType,
        public value: number,
        public instalment: number
    ){}

    
}