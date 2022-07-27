import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { accessRequest, environment } from 'src/environments/environment';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  listHeroes$: Subject<Hero[]> = new Subject();
  offset:number = 0;
  filter:string = "";
  constructor(private http: HttpClient) { }

  getCharacters() {
    const page = this.setCategory('characters');
    this.http
    .get<any>(page)
    .pipe(map((data: any) => data.data))
    .subscribe((data: any) => {
      
      var personagens: Hero[] = data.results.map(
        (personagem: Hero) => {
          return personagem = new Hero().deserialize(personagem);
        }
      );

      this.listHeroes$.next(personagens);
    });
  }
  setCategory(page: string): string {
    const startWith = this.filter ? "&nameStartsWith=" + this.filter : "";
    return `${environment.apiURL + page}?&offset=${this.offset}${startWith}`;
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
