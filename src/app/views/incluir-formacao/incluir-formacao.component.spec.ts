import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirFormacaoComponent } from './incluir-formacao.component';

describe('IncluirFormacaoComponent', () => {
  let component: IncluirFormacaoComponent;
  let fixture: ComponentFixture<IncluirFormacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncluirFormacaoComponent]
    });
    fixture = TestBed.createComponent(IncluirFormacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
