import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.scss']
})
export class HeroImageComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
