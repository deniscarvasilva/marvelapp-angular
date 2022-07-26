import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  listHeroes$: Subject<Hero[]> = new Subject();

  constructor(private http: HttpClient) { }

  getCharacters() {
    const page = this.setCategory('characters');
    this.http.get<any>(page).pipe(map((data: any) => data.data)).subscribe(data => {      
      this.listHeroes$.next(data.results);
     
    })
  }


  setCategory(page: string): string {
    return `${environment.apiURL + page}`;
  }
}
