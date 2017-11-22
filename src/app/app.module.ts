import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabOrderDetailPage } from './../pages/tabs/tab-order-detail/tab-order-detail';
import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';
import { SalesPage } from './../pages/sales/sales';
import { OrderDetailPaymentPage } from './../pages/order-detail-payment/order-detail-payment';
import { OrderDetailItensPage } from './../pages/order-detail-itens/order-detail-itens';
import { OrderDetailCustomerPage } from './../pages/order-detail-customer/order-detail-customer';
import { OrderDetailPage } from './../pages/order-detail/order-detail';
import { OrderPage } from './../pages/order/order';
import { SettingsPage } from './../pages/settings/settings';
import { ProductSearchPage } from './../pages/searches/product-search/product-search';
import { CustomerSearchPage } from './../pages/searches/customer-search/customer-search';
import { EditItemPage } from './../pages/edit-item/edit-item'; 
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';

import { ProductService } from './../services/product.service';
import { AuthService } from './../services/auth.service';
import { OrderService } from './../services/order.service';
import { CustomerService } from './../services/customer.service';



import { DataChangeComponent } from './../components/data-change/data-change';
import { CounterInputComponent } from './../components/counter-input/counter-input';
import { CustomerInputComponent } from './../components/customer-input/customer-input';

import { InputMask } from "../directives/input-mask.directive";
import {BarcodeScanner} from "@ionic-native/barcode-scanner"
import { LOCALE_ID } from '@angular/core';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderPage,
    OrderDetailPage,
    OrderDetailCustomerPage,
    OrderDetailItensPage,
    OrderDetailPaymentPage,
    SalesPage,
    SigninPage,
    SignupPage,
    TabOrderDetailPage,
    SettingsPage,
    WalkthroughPage,
    InputMask,
    ProductSearchPage,
    EditItemPage,
    CounterInputComponent,
    DataChangeComponent,
    CustomerInputComponent,
    CustomerSearchPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,           
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrderPage,
    OrderDetailPage,
    OrderDetailCustomerPage,
    OrderDetailItensPage,
    OrderDetailPaymentPage,
    SalesPage,
    SigninPage,
    SignupPage,
    TabOrderDetailPage,
    SettingsPage,
    WalkthroughPage,
    ProductSearchPage,
    EditItemPage,
    CustomerSearchPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ProductService,    
    OrderService,
    CustomerService,
    BarcodeScanner,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},


  ]

})
export class AppModule {}
