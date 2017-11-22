import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public auth: AuthService

  ){}

  onLogOut(){
    this.auth.logout();
  }
}
