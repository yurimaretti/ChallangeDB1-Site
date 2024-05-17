import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMatchMentorComponent } from './card-match-mentor.component';

describe('CardMatchMentorComponent', () => {
  let component: CardMatchMentorComponent;
  let fixture: ComponentFixture<CardMatchMentorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMatchMentorComponent]
    });
    fixture = TestBed.createComponent(CardMatchMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
