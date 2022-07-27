import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private rangeService: RangeService, 
    private heroService: HeroService,
    private router: Router) {
    this.rangeService.listHeroesSliced$.subscribe(data => this.list = data);
   }

  ngOnInit(): void {
    this.heroService.getCharacters();
  }

  showLoader(){
    return this.heroService.isLoaded;

  }

  descriptionHero(id:number) {
    this.router.navigate(['description-hero'], {queryParams: {id: id}})
    
  }


}
