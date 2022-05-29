import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';

import {EmplacementService} from '../../../controller/service/emplacement.service';
import {Emplacement} from '../../../controller/model/emplacement';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ArticleComponent} from "../../articles/article-create/article.component";
import {EmplacementCreateComponent} from "../emplacement-create/emplacement-create.component";
import {Article} from "../../../controller/model/article";

@Component({
  selector: 'ngx-emplacement-list',
  templateUrl: './emplacement-list.component.html',
  styleUrls: ['./emplacement-list.component.scss'],
})
export class EmplacementListComponent implements OnInit {

  constructor(public empService: EmplacementService, private router: Router,private dialog: MatDialog) {
  }

  ngOnInit() {
    this.findall();
  }

  delete(emp: Emplacement, index: number) {
    this.empService.delete(emp, index);
  }


  get emp(): Emplacement {
    return this.empService.emp;
  }

  get emps(): Array<Emplacement> {
    return this.empService.emps;
  }

  findall() {
    return this.empService.init();
  }

  btnClick() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    dialogconfig.width = "50%";

    this.dialog.open(EmplacementCreateComponent, dialogconfig);
  }


}


