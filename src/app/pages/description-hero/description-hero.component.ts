import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-description-hero',
  templateUrl: './description-hero.component.html',
  styleUrls: ['./description-hero.component.scss']
})
export class DescriptionHeroComponent implements OnInit {
  id:number;
  hero: Hero;
  isLoading:boolean = false;
  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute,
    private heroService: HeroService
    ) { 
      this.heroService.selectedHero$.subscribe(hero => {
        this.hero = hero;
        this.isLoading = false;
      });
    }

  ngOnInit(): void {
    this.showHeroDescription();
  }

  showHeroDescription() {
    this.isLoading = true;
    this.activeRoute.queryParams.subscribe(res => {
      this.id = res['id'];
      this.heroService.selectHero(this.id);
    })
  }
  goBack() {
    this.router.navigate(['heroes']);
  }
}
