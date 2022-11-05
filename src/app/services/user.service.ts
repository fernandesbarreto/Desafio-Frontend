import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  signUpUser(values: any){
    let user: User = {} as User;
    user.email = values.email;
    user.pass = values.pass;
    user.institution = values.institution;
    user.position = values.position;
    user.name = values.username;
    localStorage.setItem('account', JSON.stringify(user));
  }

  loginUser(values: any){
    let userString:string = localStorage.getItem('account');
    let user: User = JSON.parse(userString);
    if(values.user == user.name && values.pass == user.pass){
      sessionStorage.setItem('loggedAccount', JSON.stringify(user));
      return true;
    }
    return false;
  }

  getLoggedUser(){
    let userString = sessionStorage.getItem('loggedAccount');
    let user: User = JSON.parse(userString);
    return user;
  }
}
