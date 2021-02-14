import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title: any;
  @Input() routerAdmin: any;

  constructor() { }

  ngOnInit(): void {
  }

}
