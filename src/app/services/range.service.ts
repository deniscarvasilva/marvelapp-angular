import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Hero } from '../models/hero';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class RangeService {
  listHeroesSliced$: Subject<Hero[]> = new Subject();
  listHeroesTotal: Hero[] = [];
  private init = 0;
  private slice = 10;
  private prevStatus: boolean = false;
  constructor(private heroService: HeroService,) {
    heroService.listHeroes$.subscribe(list => {
      this.listHeroesTotal = list;
      this.resetSlice();
      this.changePositionSlice();
    });
  }
  prev() {
    if (this.init > 0) {
      this.init -= 10;
      this.slice -= 10;
      this.changePositionSlice();
    } else {
      if (this.heroService.getOffSet() > 0) {
        this.prevStatus = true;
        this.heroService.decrementOffSet();
        this.heroService.getCharacters();
      }
    }
  }
  next() {
    this.init += 10;
    this.slice += 10;
    if (this.slice > 100) {
      this.heroService.incrementOffSet();
      this.heroService.getCharacters();
    } else {
      this.changePositionSlice();
    }
  }
  resetSlice() {
    if (this.prevStatus) {
      this.init = 90;
      this.slice = 100;
      this.prevStatus = false;
    } else {
      this.init = 0;
      this.slice = 10;
    }
  }
  changePositionSlice() {
    this.listHeroesSliced$.next(
      this.listHeroesTotal.slice(this.init, this.slice))
  }
}
