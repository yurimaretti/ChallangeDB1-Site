import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreasConhecimento } from 'src/app/enums/areasConhecimento';
import { AprendizModel } from 'src/app/models/aprendizModel';
import { MentorModel } from 'src/app/models/mentorModel';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  areasEnum = Object.values(AreasConhecimento);
  tipoCadastro: string = '';
  email: string = '';
  aprendizes: AprendizModel[] = [];
  mentores: MentorModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

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

  consultarUsuarios(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.apiService.getMentor().subscribe(data => {
        this.mentores = data;
      });
    } else if (this.tipoCadastro === 'Mentor') {
      this.apiService.getAprendiz().subscribe(data => {
        this.aprendizes = data;
      });
    }
  }
}
