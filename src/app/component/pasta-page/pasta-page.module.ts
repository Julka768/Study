import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { PastaViewModule } from '../list-views/pasta-view/pasta-view.module';
import { PastaPageRouterModule } from './pasta-page.routing.module';
import { PastaPageComponent } from './pasta-page.component';

@NgModule({
  imports: [
    PastaPageRouterModule,
    NgMaterialModule,
    FormsModule,
    MatListModule,
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    PastaViewModule,
  ],
  exports: [PastaPageComponent],
  declarations: [PastaPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PastaPageModule {}
