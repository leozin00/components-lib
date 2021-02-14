import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridMenuComponent } from './grid-menu.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [GridMenuComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [GridMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridMenuModule { }
