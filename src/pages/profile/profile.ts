import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { MatchPage } from '../match/match';
import { ChatmainPage } from '../chatmain/chatmain';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
    public toast: ToastController,
    public authService: AuthProvider,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  home(){
    this.navCtrl.popToRoot();
  }

  chatm(){
    this.navCtrl.pop();
    this.navCtrl.push(ChatmainPage);
  }

  logout() {
    this.authService.logout()
    .then(() => {
    })
    .catch((e) => {
      this.toast.create({ message: `Erro ao sair do sistema. Tente novamente mais tarde.`, duration: 3000 }).present();
    });
    this.navCtrl.setRoot(LoginPage);
  }
}
