import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { RangeComponent } from './range/range.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ HeaderComponent, SearchComponent, RangeComponent],
  imports: [ CommonModule, RouterModule, FormsModule],
  exports: [RouterModule, HeaderComponent, SearchComponent, RangeComponent]
})
export class SharedModule { }
