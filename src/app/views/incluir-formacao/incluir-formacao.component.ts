import { Component } from '@angular/core';
import { GrauInstrucao } from 'src/app/enums/grauInstrucao';

@Component({
  selector: 'app-incluir-formacao',
  templateUrl: './incluir-formacao.component.html',
  styleUrls: ['./incluir-formacao.component.scss']
})
export class IncluirFormacaoComponent {
  grauEnum = Object.values(GrauInstrucao);
}
