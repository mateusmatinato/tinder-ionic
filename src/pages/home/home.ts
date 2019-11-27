import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ModalController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ChatmainPage } from '../chatmain/chatmain';
import { MatchPage } from '../match/match';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user.model';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  mostraNomeFoto = true;

  user: AngularFireList<User[]>;

  constructor(
    public userService: UserProvider,
    public authService: AuthProvider,
    public modalCtrl: ModalController,
    public navCtrl: NavController) {

  }

  ionViewCanEnter(): boolean{
    return this.authService.authenticated;
  }

  ionViewWillLoad(){
  }

  ionViewDidLoad(){
    this.slides.lockSwipes(true);
  }
  nextFoto(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  
  prevFoto(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

  chatm() {
    this.navCtrl.push(ChatmainPage)
  }
  pho() {
    this.navCtrl.push(ProfilePage)
  }

  like(){
    //se deu match mostra o match
    let modal = this.modalCtrl.create(MatchPage);
    modal.present();

    //se não, busca o proximo do banco
  }


  mostraInformacoes(): void {
    let divDescricao = document.getElementById("descricao");
    let divFoto = document.getElementById("foto");

    if (divDescricao.style.display == "none") {
      // abre as informações
      divDescricao.style.display = "block";
      divFoto.style.height = "55%";

      this.mostraNomeFoto = false;


    }
    else {
      // fecha as informações
      divDescricao.style.display = "none";
      divFoto.style.height = "98%";

      this.mostraNomeFoto = true;

    }
  }

}
