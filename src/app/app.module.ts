import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { ContinueButtonComponent } from './components/button/continue-button/continue-button.component';
import { ButtonSignInComponent } from './components/button/button-sign-in/button-sign-in.component';
import { NavbarComponent } from './pages/navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    ContinueButtonComponent,
    ButtonSignInComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
