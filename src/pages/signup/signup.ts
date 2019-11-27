import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Loading, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

import 'rxjs/add/operator/first';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private userProvider: UserProvider,
    private authService: AuthProvider,
    private toast: ToastController,
    private loadingCtrl: LoadingController) {


    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      ra: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      mail: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.required, Validators.minLength(8)]],
      date: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    let loading: Loading = this.showLoading();
    let formUser = this.signupForm.value;
    let ra: string = formUser.ra;

    this.userProvider.raExists(ra)
      .first()
      .subscribe((raExists: boolean) => {
        // Verifica se o RA já foi inserido em algum usuário, como o subscribe fica ouvindo mudanças
        // utiliza o .first() para pegar somente o primeiro retorno

        if (!raExists) {
          //pode cadastrar já que o RA não foi inserido
          this.authService.createAuthUser({
            email: formUser.mail,
            password: formUser.password
          }).then((userData) => {
            delete formUser.password;

            formUser.uid = userData.uid;

            this.userProvider.save(formUser)
              .then(() => {
                loading.dismiss();
                this.toast.create({ message: "Usuário cadastrado com sucesso.", duration: 3000 }).present();
                this.navCtrl.setRoot(HomePage);
              })
              .catch((e) => {
                loading.dismiss();
                this.toast.create({ message: `Erro: ${e.message}`, duration: 3000 }).present();
              })

          })
            .catch((e) => {
              loading.dismiss();
              this.toast.create({ message: `Erro: ${e.message}`, duration: 3000 }).present();
            });
        }
        else {
          // não pode cadastrar já que o RA já foi inserido
          loading.dismiss();
          this.toast.create({
            message: "Esse RA já possui cadastro no sistema, caso esse RA seja mesmo o seu," +
              "entre em contato no e-mail: mateusmatinato@gmail.com", duration: 4000
          }).present();
        }

      });
  };

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: "Aguarde"
    });

    loading.present();
    return loading;
  }
}
