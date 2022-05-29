import {Article} from './article';

export class Emplacement {
  public id: number;
  public code: string;
  public alle: string;
  public travee: string;
  public niveau: string;
  public alveole: string;
  public status: string;
  public poidsMax:number
  public articles = new Array<Article>();


}
