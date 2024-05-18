import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AprendizModel } from '../models/aprendizModel';
import { Observable } from 'rxjs';
import { MentorModel } from '../models/mentorModel';
import { FormAprdzModel } from '../models/formAprendizModel';
import { FormMentorModel } from '../models/formMentorModel';
import { HabilidadeModel } from '../models/habilidadeModel';
import { InteresseModel } from '../models/interesseModel';
import { MatchModel } from '../models/matchModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly BASE_URL = 'http://localhost:5003/api';

  constructor(private http: HttpClient) {}

  // Endpoints Aprendiz

  incluirAprdz(dados: AprendizModel): Observable<AprendizModel> {
    return this.http.post<AprendizModel>(`${this.BASE_URL}/Aprendiz`, dados);
  }

  getAprendiz(): Observable<AprendizModel[]> {
    return this.http.get<AprendizModel[]>(`${this.BASE_URL}/Aprendiz`);
  }

  getAprendizPorEmail(emailAprendiz: string): Observable<AprendizModel> {
    return this.http.get<AprendizModel>(`${this.BASE_URL}/Aprendiz/${emailAprendiz}`);
  }

  getMentoresMatchPorEmail(emailAprendiz: string): Observable<MentorModel[]> {
    return this.http.get<MentorModel[]>(`${this.BASE_URL}/match-mentores/${emailAprendiz}`);
  }

  atualizarAprdz(emailAprendiz: string, dados: AprendizModel): Observable<AprendizModel> {
    return this.http.put<AprendizModel>(`${this.BASE_URL}/Aprendiz/${emailAprendiz}`, dados);
  }

  // Endpoints Mentor

  incluirMentor(dados: MentorModel): Observable<MentorModel> {
    return this.http.post<MentorModel>(`${this.BASE_URL}/Mentor`, dados);
  }

  getMentor(): Observable<MentorModel[]> {
    return this.http.get<MentorModel[]>(`${this.BASE_URL}/Mentor`);
  }

  getMentorPorEmail(emailMentor: string): Observable<MentorModel> {
    return this.http.get<MentorModel>(`${this.BASE_URL}/Mentor/${emailMentor}`);
  }

  getAprendizesMatchPorEmail(emailMentor: string): Observable<AprendizModel[]> {
    return this.http.get<AprendizModel[]>(`${this.BASE_URL}/match-aprendizes/${emailMentor}`);
  }

  atualizarMentor(emailMentor: string, dados: MentorModel): Observable<MentorModel> {
    return this.http.put<MentorModel>(`${this.BASE_URL}/Mentor/${emailMentor}`, dados);
  }

  // Endpoints Formação Aprendiz

  incluirFormAprdz(dados: FormAprdzModel): Observable<FormAprdzModel> {
    return this.http.post<FormAprdzModel>(`${this.BASE_URL}/FormacaoAprendiz`, dados);
  }

  getFormAprdzPorEmail(emailAprendiz: string): Observable<FormAprdzModel[]> {
    return this.http.get<FormAprdzModel[]>(`${this.BASE_URL}/FormacaoAprendiz/${emailAprendiz}`);
  }

  excluirFormAprdz(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/FormacaoAprendiz/${id}`);
  }

  // Endpoints Formação Mentor

  incluirFormMentor(dados: FormMentorModel): Observable<FormMentorModel> {
    return this.http.post<FormMentorModel>(`${this.BASE_URL}/FormacaoMentor`, dados);
  }

  getFormMentorPorEmail(emailMentor: string): Observable<FormMentorModel[]> {
    return this.http.get<FormMentorModel[]>(`${this.BASE_URL}/FormacaoMentor/${emailMentor}`);
  }

  excluirFormMentor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/FormacaoMentor/${id}`);
  }

  // Endpoints Habilidade

  incluirHabilidade(dados: HabilidadeModel): Observable<HabilidadeModel> {
    return this.http.post<HabilidadeModel>(`${this.BASE_URL}/Habilidade`, dados);
  }

  getHabilidadePorEmail(emailMentor: string): Observable<HabilidadeModel> {
    return this.http.get<HabilidadeModel>(`${this.BASE_URL}/Habilidade/${emailMentor}`);
  }

  atualizarHabilidade(habilidadeId: number, dados: HabilidadeModel): Observable<HabilidadeModel> {
    return this.http.put<HabilidadeModel>(`${this.BASE_URL}/Habilidade/${habilidadeId}`, dados);
  }

  // Endpoints Interesse

  incluirInteresse(dados: InteresseModel): Observable<InteresseModel> {
    return this.http.post<InteresseModel>(`${this.BASE_URL}/Interesse`, dados);
  }

  getInteressePorEmail(emailAprdz: string): Observable<InteresseModel> {
    return this.http.get<InteresseModel>(`${this.BASE_URL}/Interesse/${emailAprdz}`);
  }

  atualizarInteresse(interesseId: number, dados: InteresseModel): Observable<InteresseModel> {
    return this.http.put<InteresseModel>(`${this.BASE_URL}/Interesse/${interesseId}`, dados);
  }

  // Endpoints Match

  incluirMatch(dados: MatchModel): Observable<MatchModel> {
    return this.http.post<MatchModel>(`${this.BASE_URL}/Match`, dados);
  }

  getMatchPorAprdz(emailAprdz: string): Observable<MatchModel> {
    return this.http.get<MatchModel>(`${this.BASE_URL}/Match/por-aprdz/${emailAprdz}`);
  }

  getMatchPorMentor(emailMentor: string): Observable<MatchModel> {
    return this.http.get<MatchModel>(`${this.BASE_URL}/Match/por-mentor/${emailMentor}`);
  }

  getMatchPorEmails(emailAprdz: string, emailMentor: string): Observable<MatchModel> {
    return this.http.get<MatchModel>(`${this.BASE_URL}/Match/por-emails/${emailAprdz}/${emailMentor}`);
  }

  atualizarMatch(matchId: number, dados: MatchModel): Observable<MatchModel> {
    return this.http.put<MatchModel>(`${this.BASE_URL}/Match/${matchId}`, dados);
  }
}
