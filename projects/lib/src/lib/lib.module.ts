import { ToolbarModule } from './toolbar/toolbar.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LibComponent } from './lib.component';



@NgModule({
  declarations: [LibComponent],
  imports: [
    ToolbarModule
  ],
  exports: [LibComponent, ToolbarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibModule { }
