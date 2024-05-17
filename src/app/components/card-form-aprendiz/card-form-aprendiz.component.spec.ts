import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormAprendizComponent } from './card-form-aprendiz.component';

describe('CardFormAprendizComponent', () => {
  let component: CardFormAprendizComponent;
  let fixture: ComponentFixture<CardFormAprendizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFormAprendizComponent]
    });
    fixture = TestBed.createComponent(CardFormAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
