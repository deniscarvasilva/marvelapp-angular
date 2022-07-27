import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-name',
  templateUrl: './hero-name.component.html',
  styleUrls: ['./hero-name.component.scss']
})
export class HeroNameComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
