import { WalkthroughPage } from './../pages/walkthrough/walkthrough';
import { SigninPage } from './../pages/signin/signin';
import { SettingsPage } from './../pages/settings/settings';
import { OrderPage } from './../pages/order/order';
import { SalesPage } from './../pages/sales/sales';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  salesPage = SalesPage;
  orderPage = OrderPage;
  settingsPage = SettingsPage;
  signinPage = SigninPage;

  isAuthenticated: boolean = false;

  rootPage:any;// = SalesPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      firebase.initializeApp({
        apiKey: "AIzaSyA90BJz9Fg6CtkaZpbPYNmCdi44wZ6tzQQ",
        authDomain: "tdapp-53fb0.firebaseapp.com",
        databaseURL: "https://tdapp-53fb0.firebaseio.com",
        projectId: "tdapp-53fb0",
        storageBucket: "tdapp-53fb0.appspot.com",
        messagingSenderId: "159256520588"
      });      

      firebase.auth().onAuthStateChanged(user => {
        if (user){
          this.isAuthenticated = true;
          this.rootPage = SalesPage;
        }
        else{
          this.isAuthenticated = false;
          this.rootPage = WalkthroughPage;

        }


      });
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  openPage(page: any){
    this.rootPage = page;
  }

  


}

