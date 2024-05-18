import { FormAprdzModel } from "./formAprendizModel";
import { InteresseModel } from "./interesseModel";
import { MatchModel } from "./matchModel";

export interface AprendizModel {
  emailAprendiz: string;
  nomeAprendiz: string;
  generoAprendiz: string;
  senhaAprendiz: string;
  formacaoAprendiz?: FormAprdzModel[];
  interesse?: InteresseModel[];
  match?: MatchModel[];
}
