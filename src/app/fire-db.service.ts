import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  constructor(private db: AngularFireDatabase) { }

  updateUserData(user: any) {
    console.log('user: ', user);
    const path = 'users/' + user.uid;
    const u = {
      email: user.email
    };
    this.db.object(path).update(u)
    .catch(error => console.log(error));
  }

  getUsers() {
    const path = 'users/';
    return this.db.list(path).snapshotChanges();
  }

  removeUser(userUid) {
    const path = 'users/' + userUid;
    return this.db.object(path).remove();
  }

  getOutStandingPhones() {
    const path = 'phones';
    return this.db.list(path).snapshotChanges();
  }

  getIphones() {
    const path = 'iphones';
    return this.db.list(path).snapshotChanges();
  }

  getSamsungs() {
    const path = 'samsungs';
    return this.db.list(path).snapshotChanges();
  }

  getHuawei() {
    const path = 'huaweis';
    return this.db.list(path).snapshotChanges();
  }

  getLg() {
    const path = 'lgs';
    return this.db.list(path).snapshotChanges();
  }

  getPhoneIphone(id) {
    const path = 'iphones/' + id;
    return this.db.list(path).snapshotChanges();
  }

  getPhoneSamsung(id) {
    const path = 'samsungs/' + id;
    return this.db.list(path).snapshotChanges();
  }

  getPhoneLg(id) {
    const path = 'lgs/' + id;
    return this.db.list(path).snapshotChanges();
  }

  getPhoneHuawei(id) {
    const path = 'huaweis/' + id;
    return this.db.list(path).snapshotChanges();
  }

}
