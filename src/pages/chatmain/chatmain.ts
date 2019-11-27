import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoPage } from '../photo/photo';
import { ProfilePage } from '../profile/profile';
@Component({
  selector: 'page-chatmain',
  templateUrl: 'chatmain.html',
})
export class ChatmainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatmainPage');
  }

  pho(){
    this.navCtrl.pop();
    this.navCtrl.push(ProfilePage);
  }

  home(){
    this.navCtrl.popToRoot();
  }


}
