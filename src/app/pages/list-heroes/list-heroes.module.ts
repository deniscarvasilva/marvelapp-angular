import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroesComponent } from './list-heroes.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ ListHeroesComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: ListHeroesComponent }])
  ],
  exports: [ListHeroesComponent]
})
export class ListHeroesModule { }
