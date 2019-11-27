import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';


@Injectable()
export class UserProvider {
  private PATH = "users/";


  user: AngularFireList<User[]>;

  constructor(public db: AngularFireDatabase, public http: HttpClient) {
  }

  save(user: User) {
    return this.db.object(this.PATH + user.uid)
      .set(user);
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }

  raExists(ra: string): Observable<boolean> {
    return this.db.list(this.PATH, ref => ref.orderByChild('ra').equalTo(ra)
    ).snapshotChanges().map((users) => {
      return users.length > 0;
    });

  }

}
