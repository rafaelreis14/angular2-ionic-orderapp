import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ProductModel } from './../models/product.model';
import 'rxjs/Rx'

@Injectable()
export class ProductService{    

    constructor(
        public http: Http
    ){}


    getProducts(){
        return this.http.get('http://localhost:57952/api/Products')
            .map(response => response.json() );
    }


    private isNumeric(value) {
        return /^\d+$/.test(value);
    }

    getProduct(code:string){
        if(this.isNumeric(code)){
            return this.getProductByCode(code);
      
        }
        else{
            return this.getProductByDescription(code); 
        }
    }

    getProductByDescription(code: string){
        return this.getProducts()
            .map((prod: ProductModel[])=> prod.filter( p => p.description.toLowerCase().includes(code.toLowerCase()) ))        
            
    }
            
    getProductByCode(code: string){
        return this.getProducts()
            .map((prod: ProductModel[])=> prod.filter( p => p.productID == code) );         
            
    }        
    
}