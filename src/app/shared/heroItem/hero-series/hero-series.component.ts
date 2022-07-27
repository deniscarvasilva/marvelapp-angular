import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-series',
  templateUrl: './hero-series.component.html',
  styleUrls: ['./hero-series.component.scss']
})
export class HeroSeriesComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
