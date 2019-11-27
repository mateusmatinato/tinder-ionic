import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  signupForm: FormGroup;

  constructor(
    public toast: ToastController,
    public loadingCtrl: LoadingController,
    public authService: AuthProvider,
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.signupForm = this.formBuilder.group({
      mail: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }


  signup() {
    this.navCtrl.push(SignupPage);
  }

  signin() {
    let loading: Loading = this.showLoading();
    let user = this.signupForm.value;

    this.authService.signIn(user)
      .then((success) => {
        //logou
        loading.dismiss();
        this.toast.create({ message: "Login efetuado com sucesso.", duration: 3000 }).present();
        this.navCtrl.setRoot(HomePage);
      })
      .catch((exception) => {
        loading.dismiss();
        this.toast.create({ message: "Não foi possível realizar o login.", duration: 3000 }).present();
        // não logou
      });

  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: "Aguarde"
    });

    loading.present();
    return loading;
  }


}
