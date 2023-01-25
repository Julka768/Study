import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const defaultPath = 'home-page';
const routes: Routes = [
  {
    path: defaultPath,
    loadChildren: () =>
      import('./component/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },

  {
    path: 'pizza',
    loadChildren: () =>
      import('./component/list-views/pizza-view/pizza-view.module').then(
        (m) => m.PizzaViewModule
      ),
  },
  {
    path: 'pasta',
    loadChildren: () =>
      import('./component/list-views/pasta-view/pasta-view.module').then(
        (m) => m.PastaViewModule
      ),
  },
  {
    path: 'salad',
    loadChildren: () =>
      import('./component/list-views/salad-view/salad-view.module').then(
        (m) => m.SaladViewModule
      ),
  },
  {
    path: '',
    redirectTo: defaultPath,
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: defaultPath,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
