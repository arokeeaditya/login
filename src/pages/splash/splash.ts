import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TermsPage } from '../terms/terms';
import { PrivacyPage } from '../privacy/privacy';
import { HomePage } from '../home/home';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Login() {
    this.navCtrl.push(LoginPage);
  }
  Terms() {
    this.navCtrl.push(TermsPage);
  }
  Privacy() {
    this.navCtrl.push(PrivacyPage);
  }
  guest() {
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

}
