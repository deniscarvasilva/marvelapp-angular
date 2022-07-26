import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroesComponent } from './list-heroes.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ ListHeroesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ListHeroesComponent }])
  ],
  exports: [ListHeroesComponent]
})
export class ListHeroesModule { }
