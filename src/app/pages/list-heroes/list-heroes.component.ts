import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { RangeService } from 'src/app/services/range.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {
  list: Hero[] = [];
  constructor(private rangeService: RangeService, private heroService: HeroService) {
    this.rangeService.listHeroesSliced$.subscribe(data => {this.list = data;console.log(this.list)});
   }

  ngOnInit(): void {
    this.heroService.getCharacters();
  }



}
