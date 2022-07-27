import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSeriesComponent } from './hero-series.component';

describe('HeroSeriesComponent', () => {
  let component: HeroSeriesComponent;
  let fixture: ComponentFixture<HeroSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
