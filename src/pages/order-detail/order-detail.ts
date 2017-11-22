import { OrderService } from './../../services/order.service';
import { OrderModel } from './../../models/order.model';
import { OrderPage } from './../order/order';
import { Component, OnInit } from '@angular/core';
import { App } from 'ionic-angular';

@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage implements OnInit{ 

  order: OrderModel;
  selectOptions = ['Interno','Pesquisa','Negociacao'];

  constructor(
    private app: App,
    private orderServ: OrderService
  ) {
   
  }


  ngOnInit(){

    
    
  }

  ionViewWillEnter(){
    this.order = this.orderServ.getOrder();   
    
  }




  popPage(){

    this.app.getRootNav().setRoot(OrderPage);
  }

}
