/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {

  NbThemeModule,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbInputModule,
  NbCheckboxModule, NbButtonModule, NbIconComponent, NbIconModule, NbOptionModule, NbSelectModule, NbProgressBarModule,
} from '@nebular/theme';
import {PagesComponent} from './pages/pages.component';

import {AuthInterceptor} from './controller/service/auth-interceptor.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './aut/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatIconModule} from "@angular/material/icon";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {TempComponent} from "./template/temp/temp.component";
import {ConfirmDialogComponent} from "./pages/confirm-dialog/confirm-dialog.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ArticleListComponent} from "./pages/articles/article-list/article-list.component";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatOptionModule} from "@angular/material/core";
import {RouterModule} from "@angular/router";
import {MatProgressBarModule} from "@angular/material/progress-bar";







@NgModule({
  declarations: [AppComponent, LoginComponent, TempComponent],
  imports: [

    NbProgressBarModule,
    MatProgressBarModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    MatOptionModule,
    MatAutocompleteModule,
    NbSelectModule,
    NbOptionModule,
    NgbModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    NbIconModule,
    NbButtonModule,
    MatIconModule,
    CommonModule,
    NgxPaginationModule,

    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,

    NbThemeModule.forRoot(),
    NbInputModule,

    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: MatDialogRef, useValue: []}, {provide: MAT_DIALOG_DATA, useValue: []}],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmDialogComponent,ArticleListComponent],
})
export class AppModule {
}
