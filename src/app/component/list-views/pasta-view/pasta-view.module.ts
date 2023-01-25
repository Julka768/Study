import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { CommonModule } from '@angular/common';
import { PastaViewComponent } from './pasta-view.component';
import { PastaViewRouterModule } from './pasta-view.routing.module';

@NgModule({
  imports: [
    PastaViewRouterModule,
    NgMaterialModule,
    FormsModule,
    MatListModule,
    CommonModule,
  ],
  exports: [PastaViewComponent],
  declarations: [PastaViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PastaViewModule {}
