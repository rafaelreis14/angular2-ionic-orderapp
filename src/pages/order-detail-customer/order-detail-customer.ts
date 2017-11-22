import { OrderService } from './../../services/order.service';
import { OrderModel } from './../../models/order.model';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-order-detail-customer',
  templateUrl: 'order-detail-customer.html',
})
export class OrderDetailCustomerPage implements OnInit {
  order: OrderModel;
  
  constructor(public orderService: OrderService) {}

  ionViewWillEnter(){
    this.order = this.orderService.getOrder();
    console.log(this.order);
  }


  ngOnInit(){
    this.order = this.orderService.getOrder();
    console.log('oninit')
  }

  customerChanging(e){    
    this.orderService.setCostumer(e);

  }
}
