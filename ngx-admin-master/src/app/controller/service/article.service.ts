import {Injectable} from '@angular/core';
import {Article} from '../model/article';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  opts = [];
  public totalRecords: any;
  public errorMessage: ' ';
  public isCreateFailed = false;
  public isCreateSucessed = false;
  private _article = new Article();
  page: Number = 1;
  private _articles = new Array<Article>();
  public notif: string;
  private _index: number;
  private nombre: number;

  constructor(private http: HttpClient, private token: TokenStorageService) {
  }

  get article(): Article {
    if (this._article == null) {
      this._article = new Article();
    }

    return this._article;
  }

  set article(value: Article) {
    this._article = value;
  }

  get articles(): Array<Article> {
    if (this._articles == null) {
      this._articles = new Array<Article>();
    }
    return this._articles;
  }

  set articles(value: Array<Article>) {
    this._articles = value;
  }

  public clone(article1: Article) {

    const _clone = new Article();
    _clone.id = article1.id;
    _clone.code = article1.code;
    _clone.description = article1.description;
    _clone.cup = article1.cup;
    _clone.libelle = article1.libelle;
    _clone.marque = article1.marque;
    _clone.nom = article1.nom;
    _clone.type = article1.type;
    _clone.qtt = article1.qtt;
    _clone.unite = article1.unite;
    return _clone;
  }

  public save() {
    this.http.post<number>('http://localhost:8080/Article/', this.article).subscribe(
      data => {
        this.articles.push(this.clone(this.article));
        // @ts-ignore
        this.article = null;
        this.isCreateFailed = false;
        this.isCreateSucessed = true;
      },
      error => {

        this.errorMessage = error.error.message;
        this.isCreateFailed = true;
      },
    );
  }


  // Liste des Articles


  public init() {

    this.http.get<Array<Article>>('http://localhost:8080/Article/findAll').subscribe(
      data => {

        this._articles = data;
        this.totalRecords = data.length;

      },
      error => {
        console.log('erreur');

      }

      ,
    );


  }

  public delete(article: Article, index: number) {

    this.http.delete<void>('http://localhost:8080/Article/id/' + article.id).subscribe(
      data => {

        this.articles.splice(index, 1);

      },
      error => {
        console.log('erreur');

      },
    );


  }
  public details(index: number, d: Article) {
    this.article = this.clone(d);
    this._index = index;

  }

  public findById(id:number) {

    this.http.get<Article>('http://localhost:8080/Article/id/'+ id).subscribe(
      data => {

         return this._article = data;
      },
      error => {
        console.log('erreur');

      }

      ,
    );


  }

  public getNumberProduct() : Observable<any>{
    return this.http.get<number>('http://localhost:8080/Article/GetNumberProduct/');

  }public getAppro() : Observable<any>{
    return this.http.get<number>('http://localhost:8080/Article/GetAppro/');

  }



}




