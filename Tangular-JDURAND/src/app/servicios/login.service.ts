import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {User} from 'firebase';

@Injectable()

export class LoginService {
  public user: User;

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string){
  try {
    const result = await this.afAuth.signInWithEmailAndPassword(
    email, password
    );
    return result; }
  catch (error) { console.log(error); }


  }
}
