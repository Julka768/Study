import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ShoppingPageRouterModule } from './shopping-page.routing.module';
import { ShoppingPageComponent } from './shopping-page.component';
import { PizzaViewModule } from '../list-views/pizza-view/pizza-view.module';
import { PastaViewModule } from '../list-views/pasta-view/pasta-view.module';

@NgModule({
  imports: [
    ShoppingPageRouterModule,
    NgMaterialModule,
    FormsModule,
    MatListModule,
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    PizzaViewModule,
    PastaViewModule,
  ],
  exports: [ShoppingPageComponent],
  declarations: [ShoppingPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShoppingPageModule {}
