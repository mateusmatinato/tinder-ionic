import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { MatchPage } from '../pages/match/match';
import { ChatmainPage } from '../pages/chatmain/chatmain';
import { ChatindPage } from '../pages/chatind/chatind';
import { PhotoPage } from '../pages/photo/photo';
import { LoginPage } from '../pages/login/login';

import { SignupPage } from '../pages/signup/signup';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';


const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "KEY DA API",
  authDomain: "FIREBASE APP",
  databaseURL: "URL DO BANCO",
  projectId: "tinder-clone-v01",
  storageBucket: "tinder-clone-v01.appspot.com",
  messagingSenderId: "900088170887"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    MatchPage,
    ChatmainPage,
    ChatindPage,
    PhotoPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    MatchPage,
    ChatmainPage,
    ChatindPage,
    PhotoPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserProvider,
    AuthProvider,
    AngularFireAuth
  ]
})
export class AppModule { }
