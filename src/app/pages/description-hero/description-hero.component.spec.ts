import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionHeroComponent } from './description-hero.component';

describe('DescriptionHeroComponent', () => {
  let component: DescriptionHeroComponent;
  let fixture: ComponentFixture<DescriptionHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
