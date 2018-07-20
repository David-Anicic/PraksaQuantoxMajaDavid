import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit
{
  values: number[] = [1,2,3];
  srcImages: string[] = ["o.png","x.png","o.png"];

  constructor() { }

  ngOnInit()
  {

  }
}
