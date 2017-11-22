import { ProductModel } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/Rx'
import { ProductService } from "../../services/product.service";


@Component({
  selector: 'page-sales',
  templateUrl: 'sales.html',
})
export class SalesPage implements OnInit {


  salesProducts: ProductModel[] = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,    
    public productService: ProductService

  ) { 

  }

  ngOnInit(){

    this.productService.getProducts()
    .subscribe(
      (data)=> {        
        this.salesProducts = data;
      }
    )

  }


  ion

  onClickOffer(prod:ProductModel){
    prod.activated = !prod.activated;
    
  }

  onClickFavorite(prod:ProductModel){
    prod.favorited = !prod.favorited;
  }

}
