import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInteressesComponent } from './editar-interesses.component';

describe('EditarInteressesComponent', () => {
  let component: EditarInteressesComponent;
  let fixture: ComponentFixture<EditarInteressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarInteressesComponent]
    });
    fixture = TestBed.createComponent(EditarInteressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
