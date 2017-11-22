import { OrderModel } from './../../models/order.model';

import { OrderService } from './../../services/order.service';
import { Component } from '@angular/core';
import { PaymentType } from "../../models/payment.model";



@Component({
  selector: 'page-order-detail-payment',
  templateUrl: 'order-detail-payment.html',
})
export class OrderDetailPaymentPage {
  public _type: any = PaymentType;
  private type:PaymentType = PaymentType.Dinheiro;
  remainValue: number = 0;

  order: OrderModel;
  

  constructor(public orderServer: OrderService) {
    console.log('teste');
      this.orderServer.totalPayment.subscribe(
        (total)=>{
          console.log('teste1');
          this.remainValue = this.orderServer.getOrder().remainingValue;
        }
    )

  }

  ionViewWillLoad() {
    this.type = PaymentType.Dinheiro;
    this.remainValue = this.orderServer.getOrder().remainingValue;
  }

  addPayment(e){         
    this.orderServer.addPayment(this.type, e.value);
    e.value = '';
    this.order = this.orderServer.getOrder();
  }

  onChoosingType(type){    
    this.type = type;
  }

  removePayment(i: number){
    this.orderServer.removePayment(i);
    this.order = this.orderServer.getOrder();
  }

}
