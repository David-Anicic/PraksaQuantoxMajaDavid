import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit
{
  values: number[] = [0,1,2];
  srcImages: number[][] = [[0],[0],[0],[0],[0],[0],[0],[0]];
  m: string[][] = [["blank.png"],["blank.png"],["blank.png"],["blank.png"],["blank.png"],["blank.png"],["blank.png"],["blank.png"]];
  player: number;
  gameOver: boolean;

  constructor() { }

  ngOnInit()
  {
    this.player = 1;
    this.gameOver = false;
    for (let i = 0; i < 3; i++)
    {
      for (let j = 0; j < 3; j++)
      {
          this.srcImages[i][j] = 0; 
          this.m[i][j] = "blank.png";
      }
    }
  }

  clicked(x:number, y:number): void
  {
    if (this.srcImages[x][y] == 0)
    if (this.player == 1)
    {
      this.srcImages[x][y] = 1;
      this.m[x][y] = "x.png";
      this.player = 0;
    }
    else
    {
      this.srcImages[x][y] = 2;
      this.player = 1;
      this.m[x][y] = "o.png";
    }

    this.checkStateOfTheMatrix();
  }

  checkStateOfTheMatrix(): void
  {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.srcImages[i][j] == 0)
        {
          return;
        }
      }
    }

    this.gameOver = true;
  }
}
