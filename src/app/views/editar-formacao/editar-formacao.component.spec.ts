import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFormacaoComponent } from './editar-formacao.component';

describe('EditarFormacaoComponent', () => {
  let component: EditarFormacaoComponent;
  let fixture: ComponentFixture<EditarFormacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarFormacaoComponent]
    });
    fixture = TestBed.createComponent(EditarFormacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
