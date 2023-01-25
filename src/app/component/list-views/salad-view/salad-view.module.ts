import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { CommonModule } from '@angular/common';
import { SaladViewComponent } from './salad-view.component';
import { SaladViewRouterModule } from './salad-view.routing.module';

@NgModule({
  imports: [
    SaladViewRouterModule,
    NgMaterialModule,
    FormsModule,
    MatListModule,
    CommonModule,
  ],
  exports: [SaladViewComponent],
  declarations: [SaladViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SaladViewModule {}
