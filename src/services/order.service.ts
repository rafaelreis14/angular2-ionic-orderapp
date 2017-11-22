import { PaymentModel, PaymentType } from './../models/payment.model';
import { CustomerService } from './customer.service';
import { AlertController } from 'ionic-angular';
import { Injectable, EventEmitter } from '@angular/core';
import { ItemModel } from './../models/item.model';
import { ProductModel } from './../models/product.model';
import { SellerModel } from './../models/seller.model';
import { CustomerModel } from './../models/customer.model';
import { OrderModel } from './../models/order.model';

@Injectable()
export class OrderService{
    
    constructor(
        public alertCrtl: AlertController,
        public customerService: CustomerService
    ){}

    orders:OrderModel[] = [];

    private order: OrderModel = null;    
    private itemIndex:number = 1;

    


    totalItens = new EventEmitter();
    totalPayment = new EventEmitter();

    getNewOrderNumber(){
        return '000001'
    }


    newOrder(){ 
        console.log('New order') 
        
        let orderNumber: string = this.getNewOrderNumber();

        this.order = new OrderModel(orderNumber);

        this.order.seller = new SellerModel('01', 'VENDEDOR PADRÃO');

        this.itemIndex = 1;

    
        
        this.customerService.getDefaultCustomer()
            .subscribe(
                (data)=>{                    
                    this.order.customer = data;
                    //make a copy of  address's curtomers
                    this.order.deliveyAddress =  Object.assign({},this.order.customer.address)
                    


                }
            )

        
    }



    
   private getLastItemIndex(): number{
       return this.itemIndex++;

   }
    
    addItem(item:ItemModel){   
        
        let totalItem = this.getTotalOfItem(item.product.productID);
        console.log(totalItem)

        if (totalItem > 1){
            const alert = this.alertCrtl.create({
                title:'Erro',
                message:'Já existe este produto no orçamento',
                buttons:['Ok']

            });
            alert.present();
            return;

        }
        else if (totalItem == 1){
            let i: ItemModel = this.getItemByCode(item.product.productID);
            item.whereToTake = i.whereToTake == 'Loja' ? 'Deposito' : 'Loja';
        }
        
        item.itemId = this.getLastItemIndex();
        this.order.itens.push(item);
        
        
        this.order.remainingValue = this.order.netTotal;

        this.order.payments = [];
        this.totalPayment.emit(this.order.payments.length);
        this.totalItens.emit(this.order.itens.length)
    }

    updateItem(item:ItemModel, index: number){             
        this.order.itens[index] = item;

        this.order.remainingValue = this.order.netTotal;
        
        this.order.payments = [];
        this.totalPayment.emit(this.order.payments.length);
    }


    removeItem(index:number){
        this.order.itens.splice(index, 1);
        
        this.order.remainingValue = this.order.netTotal;
        this.order.payments = [];
        this.totalPayment.emit(this.order.payments.length);
        this.totalItens.emit(this.order.itens.length);
    }

    addPayment(type: PaymentType, value: number, instalment: number = 1){


        if (value <= 0 || value > this.order.remainingValue) {
            const alert = this.alertCrtl.create({
                title:'Erro',
                message:'Valor digitado maior que o valor restante.',
                buttons:['Ok']

            });
            alert.present();
            return;

        }
        else 
        if(type == PaymentType.Nenhum)
        {
            const alert = this.alertCrtl.create(
            {
                title:'Erro',
                message:'Por favor, selecione uma condição de pagamento',
                buttons: ['Ok']            
            }
            );
            alert.present();
            return;
        }        
        else {
            let ret;
            if (type ==PaymentType.Dinheiro){
               ret = this.order.payments.find(
                   (data) => {
                       return data.type == type
                   }

                );

                if (ret){
                    const alert = this.alertCrtl.create(
                        {
                            title:'Erro',
                            message:'Já existe parcela em dinheiro',
                            buttons: ['Ok']            
                        }
                        );
                        alert.present();
                        return;
                }

            }
            
           
            this.order.payments.push(new PaymentModel(type,value,instalment));
            this.order.remainingValue =  parseFloat( (this.order.remainingValue - value).toFixed(2) );
            this.totalPayment.emit(this.order.payments.length);
        }
    }

    removePayment(index: number){
        
        let remain = this.order.remainingValue
        let value = this.order.payments[index].value;
        let sum:number  = Number(remain) + Number(value);

        this.order.remainingValue = sum;             
        this.order.payments.splice(index,1);           
        this.totalPayment.emit(this.order.payments.length);
    }


    getTotalOfItem(code:string): number{
        let itens: ItemModel[];
        
        itens =  this.order.itens.filter(
             (item)=>{
                return item.product.productID == code
             }
            
        )

        return itens.length;
    }

    getItemByCode(code:string): ItemModel{
        return this.order.itens.find(
            (item)=>{
                return item.product.productID == code
            });
    }


    getOrder(){
        return this.order;
    }

    setCostumer(customer: CustomerModel){       
        this.order.customer = customer;
        this.order.deliveyAddress =  Object.assign({},this.order.customer.address)
    }


    

}