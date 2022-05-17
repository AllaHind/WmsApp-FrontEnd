import {Component} from '@angular/core';
import {TokenStorageService} from '../../controller/service/token-storage.service';
import {ArticleService} from '../../controller/service/article.service';
import {Article} from '../../controller/model/article';

declare var $: any;

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  constructor(public articleService: ArticleService, private token: TokenStorageService) {
  }


  get article(): Article {
    return this.articleService.article;
  }

  get articles(): Array<Article> {
    return this.articleService.articles;
  }

  save() {
    this.articleService.save();

  }


  omit_special_char(event) {
    let k;
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32 || (k >= 48 && k <= 57));
  }


}
