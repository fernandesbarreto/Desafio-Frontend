import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-sign-up-box',
  templateUrl: './sign-up-box.component.html',
  styleUrls: ['./sign-up-box.component.css']
})
export class SignUpBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUser(values){
    let user: User = {} as User;

    if(values.email == values.email2 && values.pass == values.pass2){
      user.email = values.email;
      user.pass = values.pass;
      user.institution = values.institution;
      user.position = values.position;
      user.name = values.username;
      localStorage.setItem('account', JSON.stringify(user));
    }
    
  }

}
