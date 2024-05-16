import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-aprendiz',
  templateUrl: './card-aprendiz.component.html',
  styleUrls: ['./card-aprendiz.component.scss']
})
export class CardAprendizComponent {
  @Input() nomeAprendiz: String = "Yuri Maretti Cornacioni";
  @Input() generoAprendiz: String = "Masculino";
  @Input() interesseAprendiz: String = "História, Tecnologia";
}
