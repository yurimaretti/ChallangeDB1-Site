import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreasConhecimento } from 'src/app/enums/areasConhecimento';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  areasEnum = Object.values(AreasConhecimento);
  tipoCadastro: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.tipoCadastro = this.route.snapshot.paramMap.get('tipoCadastro') || '';
    this.email = this.route.snapshot.paramMap.get('email') || '';
  }

  navegarMatches(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/matches', this.tipoCadastro, this.email]);
    } else {
      this.router.navigate(['/matches', this.tipoCadastro, this.email]);
    }
  }

  navegarEditarPerfil(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    } else {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    }
  }
}
