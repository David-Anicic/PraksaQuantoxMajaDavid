import { Component, OnInit } from '@angular/core';
// import { element } from '../../../node_modules/protractor';
import { User } from 'User';
// import { EchoService } from 'angular-laravel-echo';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { GameService } from '../game.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Echo } from 'laravel-echo';
import * as io from 'socket.io-client';
// const Echo = require('laravel-echo');

// declare const Echo: any;



// window.io = window.io;
// window.Echo = window.Echo || {};

declare global {
    interface Window { io: any; }
    interface Window { Echo: any; }
}

// declare var Echo: any;

window.io = window.io;
window.Echo = window.Echo || {};
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  users: User[] = [];
  signed = false;
  userGames = [];

  constructor(private userService: UserService,
    private gameService: GameService, private router: Router, private authService: AuthService) {
    window.io = io;
  }

  ngOnInit() {

    this.signed = this.authService.isAuthenticated();

    const token = 'Bearer ' + localStorage.getItem('access_token');

    window.Echo = new Echo(
      {
      broadcaster: 'socket.io',
      host: 'http://game-project.local:6001',

        auth:
        {
          headers:
            {
              'Authorization': token
            }
        }

    });


  window.Echo.join('lobby').here((users) => {
    users.forEach(element => {
      this.users.push(element);
    });
  }).joining((user) => {
    if (this.users.indexOf(user) === -1) {
      this.users.push(user);
    }
  }).leaving((user) => {
    this.users.splice(this.users.indexOf(user));
  });


  window.Echo.private('user.' + localStorage.getItem('id')).listen('ChallengeEvent', (data) => {
    console.log(data);
  });
}
}

