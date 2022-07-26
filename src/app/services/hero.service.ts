import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { accessRequest, environment } from 'src/environments/environment';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  listHeroes$: Subject<Hero[]> = new Subject();
  selectedHero$: Subject<Hero> = new Subject();
  offset: number = 0;
  isLoaded: boolean = false;
  filter: string = "";
  constructor(private http: HttpClient) { }

  getCharacters() {
    this.isLoaded = true;
    const page = this.setCategory('characters');
    this.http
      .get<any>(page)
      .pipe(map((data: any) => data.data))
      .subscribe((data: any) => {

        var characters: Hero[] = data.results.map(
          (characters: Hero) => {
            return characters = new Hero().deserialize(characters);
          }
        );

        this.listHeroes$.next(characters);
        this.isLoaded = false;
      });
  }
  selectHero(id: number){
    this.isLoaded = true;
    const url = this.getHero('characters/');
    this.http.get<any>(url + id)
      .pipe(map((data: any) => data.data))
      .subscribe((data: any) => {

        var singleHero: Hero[] = data.results.map(
          (singleHero: Hero) => { 
            singleHero = new Hero().deserialize(singleHero);            
            return singleHero;
          }
        );
        this.selectedHero$.next(singleHero[0]);
        this.isLoaded = false;
      });
  }
  setCategory(page: string): string {
    const startWith = this.filter ? "&nameStartsWith=" + this.filter : "";
    return `${environment.apiURL + page}?&offset=${this.offset}${startWith}`;
  }
  getHero(url: string): string {
    return `${environment.apiURL + url}`;
  }
  incrementOffSet() {
    this.offset += accessRequest.limit;
  }
  decrementOffSet() {
    this.offset > 0 ? this.offset -= accessRequest.limit : false;
  }
  getOffSet(): number {
    return this.offset;
  }
}
