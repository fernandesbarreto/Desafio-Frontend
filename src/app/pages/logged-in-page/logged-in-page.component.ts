import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-logged-in-page',
  templateUrl: './logged-in-page.component.html',
  styleUrls: ['./logged-in-page.component.css']
})
export class LoggedInPageComponent implements OnInit {
  loggedUser: User = {} as User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.userService.getLoggedUser();
  }

  returnHome(){
    window.location.href = ''
  }
}
