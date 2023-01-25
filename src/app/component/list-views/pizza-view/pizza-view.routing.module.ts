import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaViewComponent } from './pizza-view.component';

const routes: Routes = [
  {
    path: '',
    component: PizzaViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaViewRouterModule {}
