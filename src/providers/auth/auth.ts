import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

@Injectable()
export class AuthProvider{

  constructor(
    public af: AngularFireModule,
    public auth: AngularFireAuth,
    public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  createAuthUser(user: { email: string, password: string }) {
    return this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signIn(user: {mail: string, password: string}): Promise<boolean>{
    return this.auth.auth.signInWithEmailAndPassword(user.mail,user.password);
  }

  logout(): Promise<void>{
    return this.auth.auth.signOut(); 
  }

  get authenticated(): boolean{
    return this.auth.auth.currentUser != null ? true : false;
  }

}
