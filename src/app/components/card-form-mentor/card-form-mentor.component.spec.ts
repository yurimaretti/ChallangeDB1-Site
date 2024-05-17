import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormMentorComponent } from './card-form-mentor.component';

describe('CardFormMentorComponent', () => {
  let component: CardFormMentorComponent;
  let fixture: ComponentFixture<CardFormMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFormMentorComponent]
    });
    fixture = TestBed.createComponent(CardFormMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
