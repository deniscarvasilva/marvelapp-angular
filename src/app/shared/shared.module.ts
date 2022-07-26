import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [ HeaderComponent, SearchComponent],
  imports: [ CommonModule, RouterModule ],
  exports: [RouterModule, HeaderComponent, SearchComponent]
})
export class SharedModule { }
