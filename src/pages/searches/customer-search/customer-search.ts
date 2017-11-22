import { CustomerModel } from './../../../models/customer.model';
import { CustomerService } from './../../../services/customer.service';
import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-customer-search',
  templateUrl: 'customer-search.html',
})
export class CustomerSearchPage {

  customers: CustomerModel[] = [];

  constructor(
    public viewCtrl: ViewController, 
    public customerService: CustomerService,
    
  ) {}


  
  onFilterCustomer(event){

    let val:string = event.target.value;
    console.log(val);
   
    this.customerService.getCustomerByName(val)
    .subscribe      (
        (data)=> {
          if (data){
            this.customers =data;
            console.log(this.customers); 
          }
          else{
            
          }
        },
        (error)=> {console.log(error)}
      ); 
  }

  

  onChooseCustomer(customer: CustomerModel){
    this.viewCtrl.dismiss(customer);
  }

  ionViewWillEnter(){
    this.customerService.getCustomers()
      .subscribe(
        (data)=> {
          this.customers = data;
          console.log(this.customers);
        }
      )
    
  }

  onClose(){
    this.viewCtrl.dismiss();
  }

}
