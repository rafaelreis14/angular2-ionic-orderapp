import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormControl } from "@angular/forms/src/model";


@Component({
  selector: 'page-signup', 
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthService,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {}

  onSubmit(f: FormControl){
    const load = this.loadCtrl.create({
      content: "Aguarde..."
    });

    load.present();
    
    this.auth.singup(f.value.email,f.value.password)
      .then(data => load.dismiss())
      .catch((error)=> {
        load.dismiss();
        this.handleError(error.message);
      }
      );
  }

  handleError(message: string){
    const alert = this.alertCtrl.create({
      title: 'Erro ao criar conta',
      message: message,
      buttons:['Ok']
    });
  }



}
