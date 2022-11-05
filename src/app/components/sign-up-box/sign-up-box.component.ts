import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserService } from 'src/app/services/new-user.service';

@Component({
  selector: 'app-sign-up-box',
  templateUrl: './sign-up-box.component.html',
  styleUrls: ['./sign-up-box.component.css']
})
export class SignUpBoxComponent implements OnInit {
  newAccountForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService
  ) { }

  ngOnInit(): void {
    this.newAccountForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      emailConfirmation: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(4)]],
      passConfirmation: ['', [Validators.required, Validators.minLength(4)]],
      institution: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  getUser(formValues: any){
    if(formValues.email == formValues.email2 && formValues.pass == formValues.pass2){
      this.newUserService.signUpUser(formValues)
    }
  }

}
