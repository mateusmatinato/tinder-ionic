import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatindPage } from '../chatind/chatind';

/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }

  voltar(){
    this.navCtrl.pop();
  }

  chat(){
    this.navCtrl.pop();
    this.navCtrl.push(ChatindPage);
  }

}
