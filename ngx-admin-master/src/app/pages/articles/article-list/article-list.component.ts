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
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog.component";
import {ConfirmDialogService} from "../../../controller/service/confirm-dialog.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
declare var $: any;
@Component({
  selector: 'ngx-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  private closeResult: string;

  constructor(public articleService: ArticleService,private router:Router
    ,private dialog: MatDialog
    ,public dialogref: MatDialogRef<ArticleComponent>,private confirmDialogService: ConfirmDialogService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.findall();
  }
  delete(article:Article, index: number) {
        this.articleService.delete(article, index);
  }


  open(content, article, id) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result === 'yes') {
        this.delete(article, id);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
  employeeDetails(id: number){
    this.router.navigate(['pages/article/article-detail', id]);
  }


  public detail(index: number, a: Article) {
      this.articleService.details(index,a);
    this.router.navigate(['pages/articles/article-detail',index] );
  }
}
