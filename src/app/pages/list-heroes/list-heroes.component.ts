import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {
  list: Hero[] = [];
  constructor(private heroService: HeroService) {
    this.heroService.listHeroes$.subscribe(data => this.list = data);
   }

  ngOnInit(): void {
    this.heroService.getCharacters();
  }


}
