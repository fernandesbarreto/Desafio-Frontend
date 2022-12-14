import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './pages/login-page/login.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { ContinueButtonComponent } from './components/button/continue-button/continue-button.component';
import { ButtonSignInComponent } from './components/button/button-sign-in/button-sign-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { AppComponent } from './app.component';
import { SignUpBoxComponent } from './components/sign-up-box/sign-up-box.component';
import { ButtonCancelComponent } from './components/button/button-cancel/button-cancel.component';
import { from } from 'rxjs';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './components/message/message.component';
import { LoggedInPageComponent } from './pages/logged-in-page/logged-in-page.component';

const routes: Routes = [
  {path:'home', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'signup', component: SignUpPageComponent},
  {path:'loggedin', component: LoggedInPageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginBoxComponent,
    ContinueButtonComponent,
    ButtonSignInComponent,
    NavbarComponent,
    FooterComponent,
    SignUpPageComponent,
    SignUpBoxComponent,
    ButtonCancelComponent,
    MessageComponent,
    LoggedInPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
