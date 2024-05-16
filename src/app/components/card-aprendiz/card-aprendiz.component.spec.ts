import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAprendizComponent } from './card-aprendiz.component';

describe('CardAprendizComponent', () => {
  let component: CardAprendizComponent;
  let fixture: ComponentFixture<CardAprendizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAprendizComponent]
    });
    fixture = TestBed.createComponent(CardAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
