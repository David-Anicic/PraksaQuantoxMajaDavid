import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from 'User';
import { StartPlayTheGameService } from '../start-play-the-game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  values: number[] = [0, 1, 2];
  srcImages: number[][] = [[0], [0], [0], [0], [0], [0], [0], [0]];
  m: string[][] = [['blank.png'], ['blank.png'], ['blank.png'], ['blank.png'], ['blank.png'], ['blank.png'], ['blank.png'], ['blank.png']];
  player: number;
  gameOver: boolean;
  users: User[] = [];
  selectedUser: User;

  constructor(private http: HttpClient, private startPlayService: StartPlayTheGameService) { }

  ngOnInit() {
    this.player = 1;
    this.gameOver = false;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          this.srcImages[i][j] = 0;
          this.m[i][j] = 'blank.png';
      }
    }

    // this.getAllUsers().subscribe(odgovor => {
    //   console.log(odgovor['data']);
    //   this.users = odgovor['data'];
    //   // console.log(this.users);
    // });
  }

  clicked(x: number, y: number): void {
    if (this.srcImages[x][y] === 0) {
      if (this.player === 1) {
        this.srcImages[x][y] = 1;
        this.m[x][y] = 'x.png';
        this.player = 0;
      } else {
        this.srcImages[x][y] = 2;
        this.player = 1;
        this.m[x][y] = 'o.png';
      }
    }
    this.checkStateOfTheMatrix();
  }

  // getAllUsers(): Observable<User[]> {
  //   const token = localStorage.getItem('token');
  //   const bearerHeader: string = 'Bearer ' + token;

  //   const headers = new HttpHeaders().set('Authorization', bearerHeader);
  //   const url = environment.serverUrl + 'users';
  //   console.log(url);
  //   const formData = new FormData();
  //   // formData.append('username', "");
  //   return this.http.get<User[]>(url);
  // }

  checkStateOfTheMatrix(): void {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.srcImages[i][j] === 0) {
          return;
        }
      }
    }

    this.gameOver = true;
  }

  // startTheGame(): void {
  //   console.log('usao');
  //   console.log(this.selectedUser);
  //   this.startPlayService.startTheGame(this.selectedUser.id).subscribe(odgovor => {
  //     console.log(odgovor);
  //   });
  // }
}
