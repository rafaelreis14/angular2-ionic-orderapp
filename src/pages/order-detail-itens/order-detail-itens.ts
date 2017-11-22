import { OrderService } from './../../services/order.service';
import { EditItemPage } from './../edit-item/edit-item';
import { ModalController, ToastController } from 'ionic-angular';
import { Component } from "@angular/core";

import { ProductSearchPage } from './../searches/product-search/product-search';
import { ItemModel } from './../../models/item.model';


@Component({
  selector: 'page-order-detail-itens',
  templateUrl: 'order-detail-itens.html',

  

})
export class OrderDetailItensPage {

  itens: ItemModel[] = [];
  
  constructor(
    public modalCtrl: ModalController,
    public orderServ: OrderService,
    public toastCrtl: ToastController
    
    
  ) {
    
  }


  addItem(){
    const modalProduct = this.modalCtrl.create(ProductSearchPage);
    
    modalProduct.present();
    modalProduct.onDidDismiss(
      (prod)=>{
        if (prod){          
          const modalItem = this.modalCtrl.create(EditItemPage,{mode: 'Adicionar', product: prod});
          modalItem.present();
          modalItem.onDidDismiss(
            (ret:string)=>{
              if(ret='Ok'){
                this.itens = this.orderServ.getOrder().itens;
              }
            }
          );
        }
      }
    )
  }

  setWhereToTake(item: ItemModel){
    let totalItem  = this.orderServ.getTotalOfItem(item.product.productID);
    if (totalItem == 1){
      let where = item.whereToTake == 'Loja' ? 'Deposito' : 'Loja';
      const toast = this.toastCrtl.create({
        message:'Item marcado para '+where,
        duration: 1500,
        position: 'bottom'
      })
      item.whereToTake = (where);
      toast.present();
    }
  }

  removeItem(index:number){
    this.orderServ.removeItem(index);
    const toast = this.toastCrtl.create({
      message:'Item removido com sucesso.' ,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();

  }

  onChangeItem(item:ItemModel, index){
    const modalItem = this.modalCtrl.create(EditItemPage,{mode: 'Alterar', item: item, index: index});
    modalItem.present();
    modalItem.onDidDismiss(
      (ret:string)=>{
        if(ret='Ok'){
          this.itens = this.orderServ.getOrder().itens;
        }        
      }
    );


  }





}
