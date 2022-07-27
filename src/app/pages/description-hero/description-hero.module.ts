import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionHeroComponent } from './description-hero.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DescriptionHeroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DescriptionHeroComponent }])
  ],
  exports: [DescriptionHeroComponent]
  
})
export class DescriptionHeroModule { }
