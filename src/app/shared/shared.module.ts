import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { RangeComponent } from './range/range.component';
import { FormsModule } from '@angular/forms';
import { HeroImageComponent } from './heroItem/hero-image/hero-image.component';
import { HeroEventsComponent } from './heroItem/hero-events/hero-events.component';
import { HeroNameComponent } from './heroItem/hero-name/hero-name.component';
import { HeroSeriesComponent } from './heroItem/hero-series/hero-series.component';




@NgModule({
  declarations: [ HeaderComponent, SearchComponent, RangeComponent,  HeroImageComponent, HeroEventsComponent, HeroNameComponent, HeroSeriesComponent],
  imports: [ CommonModule, RouterModule, FormsModule],
  exports: [RouterModule, HeaderComponent, SearchComponent, RangeComponent, HeroImageComponent, HeroEventsComponent, HeroNameComponent, HeroSeriesComponent]
})
export class SharedModule { }
