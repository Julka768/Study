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
    path: 'pizza-page',
    loadChildren: () =>
      import('./component/pizza-page/pizza-page.module').then(
        (m) => m.PizzaPageModule
      ),
  },
  {
    path: 'pasta-page',
    loadChildren: () =>
      import('./component/pasta-page/pasta-page.module').then(
        (m) => m.PastaPageModule
      ),
  },
  {
    path: 'shopping-page',
    loadChildren: () =>
      import('./component/shopping-page/shopping-page.module').then(
        (m) => m.ShoppingPageModule
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
