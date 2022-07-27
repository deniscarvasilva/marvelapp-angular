import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-events',
  templateUrl: './hero-events.component.html',
  styleUrls: ['./hero-events.component.scss']
})
export class HeroEventsComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
