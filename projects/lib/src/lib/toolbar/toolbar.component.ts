import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title: any;
  @Input() routerAdmin: any;
  paginas = [
    {
      titulo: 'Home',
      link: ''
    },
    {
      titulo: 'AdminPainel',
      link: '/admin'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
