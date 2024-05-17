import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMatchAprendizComponent } from './card-match-aprendiz.component';

describe('CardMatchAprendizComponent', () => {
  let component: CardMatchAprendizComponent;
  let fixture: ComponentFixture<CardMatchAprendizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMatchAprendizComponent]
    });
    fixture = TestBed.createComponent(CardMatchAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
