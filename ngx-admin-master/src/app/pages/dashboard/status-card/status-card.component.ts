import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../../../controller/service/article.service";

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card>
      <div class="icon-container">
        <div class="icon status-primary">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5" style="color: dodgerblue;font-size: xxx-large;">{{ title }}</div>
        <div class="status subtitle-2" style="position:relative;top: 12px" >Total d'articles disponibles</div>

      </div>
    </nb-card>
  `,
})
export class StatusCardComponent implements  OnInit{

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;
   nbrArticle: any;
  constructor(private articleService:ArticleService) {

  }
  ngOnInit() {
      this.articleService.getNumberProduct().subscribe(
      data => {
        this.nbrArticle =data;

      },error => {
        console.log(error);
      },
      );
  }

  findall() {
    return this.articleService.getNumberProduct();
  }
}
