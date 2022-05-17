import {Article} from './article';

export class Categorie {
  public id: number;
  public code: string;
  public nom: string;
  public description: string;
  public articles = new Array<Article>();

}
