import {Emplacement} from './emplacement';
import {Categorie} from './categorie';

export class Article {
  public id: number;
  public  code: string;
  public  nom: string;
  public  marque: string;
  public  libelle: string;
  public  unite: string;
  public type: string ;
  public  description: string;
  public  qtt: number;
  public  dateExp: string;
  public  cup: number;
  public  approv: number;
  public emplacement = new Emplacement();
  public categorie = new Categorie();
  public prixPublic: number;
  public prixAchat: number;
}
