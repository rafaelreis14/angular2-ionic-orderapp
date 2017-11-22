import { CustomerService } from './../../services/customer.service';
import { CustomerModel } from './../../models/customer.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController } from "ionic-angular";
import { CustomerSearchPage } from "../../pages/searches/customer-search/customer-search";

@Component({
  selector: 'customer-input',
  templateUrl: 'customer-input.html'
})
export class CustomerInputComponent implements OnInit{

  customer: CustomerModel;


  @Output() onCustomerChange = new EventEmitter();

  constructor(
    public customeService: CustomerService,
    private modelCrtl: ModalController
  ) {}

  ngOnInit(){
    console.log('customeroninit')
    this.customeService.getDefaultCustomer()
    .subscribe(
      (data)=>{
        this.customer = data;
        this.onCustomerChange.emit(this.customer);        
      } 
    )

  }
  onSearchCustomer(){
    const modal = this.modelCrtl.create(CustomerSearchPage);
    modal.present();
    modal.onDidDismiss(
      (data) => {
        if (data){
          this.customer = data;
          this.onCustomerChange.emit(this.customer);
        }
      }
    )


  }



}
