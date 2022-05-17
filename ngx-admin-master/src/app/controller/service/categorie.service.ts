import { Injectable } from '@angular/core';
import {Categorie} from '../model/categorie';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private _category = new Categorie();
  private _categories = new Array<Categorie>();

  constructor(private http: HttpClient) {
  }

  get category(): Categorie {
    if (this._category == null) {
      this._category = new Categorie();
    }

    return this._category;
  }

  set category(value: Categorie) {
    this._category = value;
  }

  get categories(): Array<Categorie> {
    if (this._categories == null) {
      this._categories = new Array<Categorie>();
    }
    return this._categories;
  }
  public init() {

    this.http.get<Array<Categorie>>('http://localhost:8080/Category/findAll').subscribe(
      data => {
        console.log("khdmat");
        this._categories = data;


      },
      error => {
console.log("erreeur");
      }

      ,
    );


  }


}
