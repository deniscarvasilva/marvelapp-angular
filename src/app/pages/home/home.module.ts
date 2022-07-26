import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ListHeroesModule } from '../list-heroes/list-heroes.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ListHeroesModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }
