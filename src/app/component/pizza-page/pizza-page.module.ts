import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { CommonModule } from '@angular/common';
import { PizzaPageComponent } from './pizza-page.component';
import { PizzaPageRouterModule } from './pizza-page.routing.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    PizzaPageRouterModule,
    NgMaterialModule,
    FormsModule,
    MatListModule,
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  exports: [PizzaPageComponent],
  declarations: [PizzaPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PizzaPageModule {}
