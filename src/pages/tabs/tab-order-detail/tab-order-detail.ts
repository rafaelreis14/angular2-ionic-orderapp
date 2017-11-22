import { OrderService } from './../../../services/order.service';
import { OrderDetailPaymentPage } from './../../order-detail-payment/order-detail-payment';
import { OrderDetailCustomerPage } from './../../order-detail-customer/order-detail-customer';
import { OrderDetailItensPage } from './../../order-detail-itens/order-detail-itens';
import { Component } from '@angular/core';

import { OrderDetailPage } from './../../order-detail/order-detail';


@Component({
  selector: 'page-tab-order-detail',
  templateUrl: 'tab-order-detail.html',
})
export class TabOrderDetailPage {
  totalItens: number = 0;
  totalPayment: number = 0;
  
  constructor(
    public order: OrderService
    
  ){
    this.order.totalItens.subscribe((value) =>{
      this.totalItens = value;      
    });

    this.order.totalPayment.subscribe(
      (value)=>{
        this.totalPayment = value;
      }
    )
    
  }


  orderDetail = OrderDetailPage
  orderDetailItens = OrderDetailItensPage
  orderDetailCustomer = OrderDetailCustomerPage
  orderDetailPayment = OrderDetailPaymentPage


  
  
}
