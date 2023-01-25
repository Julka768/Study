import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastaViewComponent } from './pasta-view.component';

const routes: Routes = [
  {
    path: '',
    component: PastaViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastaViewRouterModule {}
