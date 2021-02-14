import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'lib-grid-menu',
  templateUrl: './grid-menu.component.html',
  styleUrls: ['./grid-menu.component.scss']
})
export class GridMenuComponent implements OnInit {

  constructor() { }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 2, color: 'gray'},
    {text: 'Two', cols: 2, rows: 1, color: 'gray'},
    {text: 'Three', cols: 2, rows: 1, color: 'gray'},
  ];

  ngOnInit(): void {
  }

}
