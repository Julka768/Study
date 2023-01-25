import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { PastaViewModule } from '../list-views/pasta-view/pasta-view.module';
import { PizzaViewModule } from '../list-views/pizza-view/pizza-view.module';
import { SaladViewModule } from '../list-views/salad-view/salad-view.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRouterModule } from './home-page.routing.module';

@NgModule({
  imports: [
    HomePageRouterModule,
    NgMaterialModule,
    FormsModule,
    MatListModule,
    PizzaViewModule,
    PastaViewModule,
    SaladViewModule,
  ],
  declarations: [HomePageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
