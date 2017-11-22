
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CustomerModel } from './../models/customer.model';
import 'rxjs/Rx'

@Injectable()
export class CustomerService{    
    
    constructor(
        private http: Http
    ){}


    getCustomers(){
        return this.http.get('assets/data-sample.json')
            .map(response => response.json().customer); 
    }
    
    private isNumeric(value) {
        return /^\d+$/.test(value);
    }
    
    getCustomerByName(nameCustomer: string){
        return this.getCustomers()
            .map((cust: CustomerModel[])=> cust.filter( c => c.name.toLowerCase().includes(nameCustomer.toLowerCase()) ))        
            
    }
            
    getCustomerByCode(code: string){
        return this.getCustomers()
            .map((cust: CustomerModel[])=> cust.find( c => c.customerID == code) );         
            
    }      
    
    getDefaultCustomer(){
        return this.getCustomerByCode('000001');
    }
    
}