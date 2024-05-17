import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-match-aprendiz',
  templateUrl: './card-match-aprendiz.component.html',
  styleUrls: ['./card-match-aprendiz.component.scss']
})
export class CardMatchAprendizComponent {
  @Input() nomeAprendiz: String = "Yuri Maretti Cornacioni";
  @Input() emailAprendiz: String = "yurimaretti@hotmail.com";
  @Input() generoAprendiz: String = "Masculino";
  @Input() interesseAprendiz: String = "História, Tecnologia";
  @Input() nivelFormacao: String = "Superior - Tecnólogo";
  @Input() nomeCurso: String = "Análise e Desenvolvimento de Sistemas";
  @Input() instituicao: String = "FIAP";
}
