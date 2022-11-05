import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up-box',
  templateUrl: './sign-up-box.component.html',
  styleUrls: ['./sign-up-box.component.css']
})
export class SignUpBoxComponent implements OnInit {
  newAccountForm: FormGroup;
  show: boolean = false;
  showConfirmation: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: UserService
  ) { }

  ngOnInit(): void {
    this.newAccountForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      emailConfirmation: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(4)]],
      passConfirmation: ['', [Validators.required, Validators.minLength(4)]],
      institution: ['', [Validators.required, Validators.minLength(2)]],
      position: [''],
      terms: [false]
    });
  }

  getUser(formValues: any){
    console.log(formValues.terms)
    if(formValues.email == formValues.emailConfirmation && formValues.pass == formValues.passConfirmation && formValues.terms){
      this.newUserService.signUpUser(formValues)
      window.location.href=''
    }
  }

  showHidePass(){
    this.show = !this.show;
  }

  showHidePassConfirmation(){
    this.showConfirmation = !this.showConfirmation;
  }

}
