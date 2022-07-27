import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionHeroComponent } from './description-hero.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [DescriptionHeroComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: DescriptionHeroComponent }])
  ],
  exports: [DescriptionHeroComponent]
  
})
export class DescriptionHeroModule { }
