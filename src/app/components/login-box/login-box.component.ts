import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {
  accountForm: FormGroup;
  show: boolean = false;
  loggedIn: boolean = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      user: [''],
      pass: ['']
    });
  }

  showHidePass(){
    this.show = !this.show;
  }

  checkUser(values: any){
    this.loggedIn = this.userService.loginUser(values);
    if(this.loggedIn){
      window.location.href = 'loggedin'
    }
  }
}

