import { FormMentorModel } from "./formMentorModel";
import { HabilidadeModel } from "./habilidadeModel";
import { MatchModel } from "./matchModel";

export interface MentorModel {
  emailMentor: string;
  nomeMentor: string;
  generoMentor: string;
  senhaMentor: string;
  formacaoMentor?: FormMentorModel[];
  habilidade?: HabilidadeModel[];
  match?: MatchModel[];
}
