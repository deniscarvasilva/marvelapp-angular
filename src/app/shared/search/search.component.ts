import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
  }

  goSearch() {
    this.heroService.getCharacters();
  }

}
