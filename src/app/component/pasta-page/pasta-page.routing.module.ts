import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastaPageComponent } from './pasta-page.component';

const routes: Routes = [
  {
    path: '',
    component: PastaPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastaPageRouterModule {}
