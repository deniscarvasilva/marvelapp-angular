import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEventsComponent } from './hero-events.component';

describe('HeroEventsComponent', () => {
  let component: HeroEventsComponent;
  let fixture: ComponentFixture<HeroEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
