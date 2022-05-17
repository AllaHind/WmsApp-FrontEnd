import { NgModule } from '@angular/core';
import {
  NbButtonComponent, NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbMenuModule,
  NbTreeGridModule
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ArticleComponent } from './articles/article-create/article.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import {FormsModule} from '@angular/forms';
import {TablesRoutingModule} from './tables/tables-routing.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {TablesModule} from './tables/tables.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRow, MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ArticleService} from "../controller/service/article.service";
import {NgxPaginationModule} from "ngx-pagination";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import { EmplacementCreateComponent } from './emplacements/emplacement-create/emplacement-create.component';
import { EmplacementListComponent } from './emplacements/emplacement-list/emplacement-list.component';
import {EmplacementService} from "../controller/service/emplacement.service";
import { MagasinListComponent } from './magasins/magasin-list/magasin-list.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

@NgModule({
  imports: [
    NbIconModule,
    MatIconModule,
    NbButtonModule,
    CommonModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    PagesRoutingModule,
    NbCardModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule,
    TablesModule,
    NgxPaginationModule,
    NgxPaginationModule,
    NgxPaginationModule,
    NgxPaginationModule,
    NgxPaginationModule,
    NgxPaginationModule,
    MatDialogModule,

  ],
  declarations: [
    PagesComponent,
    ArticleComponent,
    ArticleListComponent,
    EmplacementListComponent,
    EmplacementCreateComponent,
    MagasinListComponent,
  ],
  providers: [ArticleService,EmplacementService  ,
    {provide: MatDialogRef, useValue: []}, {provide: MAT_DIALOG_DATA, useValue: []}],
})
export class PagesModule {
}
