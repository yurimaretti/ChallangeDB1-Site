import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMentorComponent } from './card-mentor.component';

describe('CardMentorComponent', () => {
  let component: CardMentorComponent;
  let fixture: ComponentFixture<CardMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMentorComponent]
    });
    fixture = TestBed.createComponent(CardMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
