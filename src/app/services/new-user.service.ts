import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

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
}
