import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {Emplacement} from '../model/emplacement';

@Injectable({
  providedIn: 'root',
})
export class EmplacementService {
  public totalRecords: any;
  public errorMessage: ' ';
  public isCreateFailed = false;
  public isCreateSucessed = false;
  private _emp = new Emplacement();
  page: Number = 1;
  private _emps = new Array<Emplacement>();
  public notif: string;

  constructor(private http: HttpClient, private token: TokenStorageService) {
  }

  get emp(): Emplacement {
    if (this._emp == null) {
      this._emp = new Emplacement();
    }

    return this._emp;
  }

  set emp(value: Emplacement) {
    this._emp = value;
  }

  get emps(): Array<Emplacement> {
    if (this._emps == null) {
      this._emps = new Array<Emplacement>();
    }
    return this._emps;
  }

  set emps(value: Array<Emplacement>) {
    this._emps = value;
  }

  public clone(emp1: Emplacement) {

    const _clone = new Emplacement();
    _clone.id = emp1.id;
    _clone.code = emp1.code;
    _clone.alle = emp1.alle;
    _clone.alveole = emp1.alveole;
    _clone.niveau = emp1.niveau;
    _clone.status = emp1.status;
    _clone.travee = emp1.travee;
    return _clone;
  }

  public save() {
    this.http.post<number>('http://localhost:8080/Emp/', this.emp).subscribe(
      data => {
        this.emps.push(this.clone(this.emp));
        // @ts-ignore
        this.emp = null;
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

    this.http.get<Array<Emplacement>>('http://localhost:8080/Emp/findAll').subscribe(
      data => {

        this._emps = data;
        this.totalRecords = data.length;

      },
      error => {
        console.log('erreur');

      }

      ,
    );


  }

  public delete(emp: Emplacement, index: number) {

    this.http.delete<void>('http://localhost:8080/Emp/id/' + emp.id).subscribe(
      data => {

        this.emps.splice(index, 1);

      },
      error => {
        console.log('erreur');

      },
    );


  }
}
