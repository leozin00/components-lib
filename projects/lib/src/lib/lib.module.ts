import { GridMenuModule } from './grid-menu/grid-menu.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LibComponent } from './lib.component';



@NgModule({
  declarations: [LibComponent],
  imports: [

  ],
  exports: [LibComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibModule { }
