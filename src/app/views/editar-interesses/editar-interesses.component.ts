import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreasConhecimento } from 'src/app/enums/areasConhecimento';

@Component({
  selector: 'app-editar-interesses',
  templateUrl: './editar-interesses.component.html',
  styleUrls: ['./editar-interesses.component.scss']
})
export class EditarInteressesComponent {

  areasEnum = Object.values(AreasConhecimento);
  tipoCadastro: string = '';
  email: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tipoCadastro = this.route.snapshot.paramMap.get('tipoCadastro') || '';
    this.email = this.route.snapshot.paramMap.get('email') || '';
  }

  voltarEditarPerfil(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    }
  }

  salvarInteresses(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/editar-perfil', this.tipoCadastro, this.email]);
    }
  }
}
