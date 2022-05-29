import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import {ArticleService} from "../../controller/service/article.service";

interface CardSettings {
  title: number;
  iconClass: string;
  type: string;


}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy,OnInit {

  public nbrArticle = 0;
  public appro = 0;

  private alive = true;
  findall() {
    return this.articleService.getNumberProduct();
  }
  ngOnInit(): void {
    this.articleService.getNumberProduct().subscribe(
      data => {
        this.nbrArticle =data;

      },error => {
        console.log(error);
      },
    );
    this.articleService.getAppro().subscribe(
      data => {
        this.appro =data;

      },error => {
        console.log(error);
      },
    );
  }
  solarValue: number;
  lightCard: CardSettings = {
    title: this.nbrArticle,
    iconClass: 'nb-star',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 3,
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 2,
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 1,
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'info',
      },
    ],
    dark: this.commonStatusCardsSet,
  };
  constructor(private themeService: NbThemeService,
              private solarService: SolarData,private articleService:ArticleService) {


    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
