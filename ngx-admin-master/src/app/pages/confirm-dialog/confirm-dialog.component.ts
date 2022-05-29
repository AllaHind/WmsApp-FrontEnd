import {Component, Inject, inject, OnInit} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ArticleService} from '../../controller/service/article.service';
import {Article} from '../../controller/model/article';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
})
export class ConfirmDialogComponent implements OnInit {

  constructor(private articleService: ArticleService, public dialogref: MatDialogRef<ConfirmDialogComponent>
              , @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
  }

  public delete(article: Article, index: number) {
    return this.articleService.delete(article, index);
  }
  onClose() {
    this.dialogref.close(false);
  }
}

