import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AprendizModel } from 'src/app/models/aprendizModel';
import { MentorModel } from 'src/app/models/mentorModel';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent {

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

  navegarInicio(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.router.navigate(['/inicio', this.tipoCadastro, this.email]);
    } else if (this.tipoCadastro === 'Mentor') {
      this.router.navigate(['/inicio', this.tipoCadastro, this.email]);
    }
  }

  consultarMatches(): void {
    if (this.tipoCadastro === 'Aprendiz') {
      this.apiService.getMentoresMatchPorEmail(this.email).subscribe(data => {
        this.mentores = data;
      });
    } else if (this.tipoCadastro === 'Mentor') {
      this.apiService.getAprendizesMatchPorEmail(this.email).subscribe(data => {
        this.aprendizes = data;
      });
    }
  }
}
