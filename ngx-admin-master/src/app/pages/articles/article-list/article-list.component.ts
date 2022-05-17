import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {ArticleService} from '../../../controller/service/article.service';
import {DataSource} from '@angular/cdk/collections';
import {Article} from '../../../controller/model/article';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ArticleComponent} from "../article-create/article.component";
import {CategorieService} from "../../../controller/service/categorie.service";
@Component({
  selector: 'ngx-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {

  constructor(public articleService: ArticleService,private router:Router
    ,private dialog: MatDialog
    ,public dialogref: MatDialogRef<ArticleComponent>) {
  }

  ngOnInit() {
    this.findall();
  }

  delete(article:Article, index: number) {
    this.articleService.delete(article,index);
  }

  btnClick() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    dialogconfig.width = "80%";

    this.dialog.open(ArticleComponent, dialogconfig);
  }

  get article(): Article {
    return this.articleService.article;
  }

  get articles(): Array<Article> {
    return this.articleService.articles;
  }

  findall() {
    return this.articleService.init();
  }


}
