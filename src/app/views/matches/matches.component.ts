import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent {

  tipoCadastro: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

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
}
