import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { PizzaViewComponent } from './pizza-view.component';
import { PizzaViewRouterModule } from './pizza-view.routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    PizzaViewRouterModule,
    NgMaterialModule,
    FormsModule,
    MatListModule,
    CommonModule,
  ],
  exports: [PizzaViewComponent],
  declarations: [PizzaViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PizzaViewModule {}
