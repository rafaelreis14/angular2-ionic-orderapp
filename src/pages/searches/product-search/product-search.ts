import { ProductModel } from './../../../models/product.model';
import { ProductService } from './../../../services/product.service';
import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-product-search',
  templateUrl: 'product-search.html',
})
export class ProductSearchPage {

  products: ProductModel[] = [];
  constructor(
    public viewCtrl: ViewController, 
    public productService: ProductService,
    private barcode: BarcodeScanner
  ) {}


  
  filterItems(event){

    let val:string = event.target.value;

   
    this.productService.getProduct(val)
    .subscribe      (
        (data)=> {
          if (data){
            this.products =data;
            console.log(this.products); 
          }
          else{
            console.log('this.products'); 
          }
        },
        (error)=> {console.log(error)}
      ); 
  }

  onScanCode(){
    this.barcode.scan()
      .then(
        (barcode)=>{
          this.productService.getProduct(barcode.text)
          .subscribe      (
              (data)=> {
                if (data){
                  this.products =data;
                  console.log(this.products); 
                }
                else{
                  console.log('this.products'); 
                }
              },
              (error)=> {console.log(error)}
            ); 
          
        },
        (error)=>{
          console.log('error barcode scan');
        }

      );
    
  }

  onChooseProduct(product: ProductModel){
    this.viewCtrl.dismiss(product);
  }

  ionViewWillEnter(){
    this.productService.getProducts()
      .subscribe(
        (data)=> {
          this.products = data;
          console.log(this.products);
        }
      )
    
  }

  onClose(){
    this.viewCtrl.dismiss();
  }

}
