import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaladViewComponent } from './salad-view.component';

const routes: Routes = [
  {
    path: '',
    component: SaladViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladViewRouterModule {}
