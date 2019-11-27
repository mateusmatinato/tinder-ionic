import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the ChatindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chatind',
  templateUrl: 'chatind.html'
})
export class ChatindPage {
  @ViewChild(Content) content: Content;
  textoMensagem: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatindPage');
  }

  sendMessage() {
    if (this.textoMensagem.length != 0) {
      let mensagemNova = document.createElement('ion-row');
      mensagemNova.style.marginTop = "5px";
      mensagemNova.style.marginBottom = "5px";
      mensagemNova.className += " row";
      mensagemNova.innerHTML = `<div id="msgMine">
      <p style=" padding:5px; color:white">${this.textoMensagem}</p>
    </div>`;
      document.getElementById("mensagens").appendChild(mensagemNova);
      this.textoMensagem = "";
      this.content.scrollToBottom(10);
    }

  }



}
