
import { OrderService } from './../../services/order.service';
import { ItemModel } from './../../models/item.model';
import { ProductModel } from './../../models/product.model';
import { CounterInputComponent } from './../../components/counter-input/counter-input';
import { Component, Directive, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html'
})
export class EditItemPage implements OnInit {

  product: ProductModel;
  item: ItemModel;
  mode: string;
  index: number;

  constructor(
    public viewCrtl: ViewController, 
    public navParams: NavParams,
    public orderServ: OrderService) {
  }

  ionViewDidLoad() {


    
  }
  
  ngOnInit(){
    this.mode = this.navParams.get('mode');
    if(this.mode == 'Adicionar'){
      this.product = this.navParams.get('product');    
      this.item = new ItemModel(0,this.product,1,5,this.product.price,'Loja');
    }
    else
    {
      this.item = this.navParams.get('item');
      this.index = this.navParams.get('index');
    }
    
  }

  onValueChanged(e){
     this.item.quantity = e.newValue;     
  }
  
  
  onAddItem(){
    if(this.mode == 'Adicionar'){
      this.orderServ.addItem(this.item);
    }
    else{
      this.orderServ.updateItem(this.item,this.index);
    }
    this.viewCrtl.dismiss('Ok');
  }

  onCancel(){
    this.viewCrtl.dismiss('Cancel');

  }

}

