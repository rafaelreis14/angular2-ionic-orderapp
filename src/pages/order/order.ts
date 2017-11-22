import { OrderModel } from './../../models/order.model';
import { OrderService } from './../../services/order.service';
import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

import { TabOrderDetailPage } from './../tabs/tab-order-detail/tab-order-detail';


@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  startDate: Date = new Date();
  orders: OrderModel[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public orderServ: OrderService
  ) {}

  onNewOrder(){
    this.orderServ.newOrder();
    this.navCtrl.push(TabOrderDetailPage, {mode: 'New'})
    
  }



}
