import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../../controller/service/article.service';
import {TokenStorageService} from '../../../controller/service/token-storage.service';
import {Article} from '../../../controller/model/article';
import {CategorieService} from '../../../controller/service/categorie.service';
import {Categorie} from '../../../controller/model/categorie';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'ngx-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  constructor(public articleService: ArticleService, private token: TokenStorageService,
              private categorieService: CategorieService,private dialog: MatDialog
              ,public dialogref: MatDialogRef<ArticleComponent>) {
  }
  get article(): Article {
    return this.articleService.article;
  }
  ngOnInit() {
    this.categorieService.init();

  }
  onClose() {

    this.dialogref.close();
  }
  btnClick() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    dialogconfig.width = "80%";

    this.dialog.open(ArticleComponent, dialogconfig);
  }
  get articles(): Array<Article> {
    return this.articleService.articles;
  }
  get categorie(): Categorie {
    return this.categorieService.category;
  }

  save() {
    this.articleService.save();

  }


  omit_special_char(event) {
    let k;
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57));
  }

  get categories(): Array<Categorie> {
    return this.categorieService.categories;
  }

}
