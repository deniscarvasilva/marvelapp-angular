import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./pages/list-heroes/list-heroes.module').then(
        (m) => m.ListHeroesModule
      )
  },
  {
    path: 'description-hero',
    loadChildren: () =>
      import('./pages/description-hero/description-hero.module').then(
        (m) => m.DescriptionHeroModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
