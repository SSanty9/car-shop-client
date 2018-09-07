import {Component, DoCheck, OnInit} from '@angular/core';
import {UserService} from './services/User.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements  OnInit, DoCheck{
  title = 'app';
  public identity;
  public token;

  constructor(
      private _userService: UserService
  ){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(){
        console.log('app.component loaded');
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
