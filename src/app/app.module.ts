import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FacebookService, FacebookInitParams} from 'ng2-facebook-sdk';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { ArticleService } from './services/article.service';
import { NavbarService } from './services/navbar.service';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { ArticleByJournalComponent } from './article-by-journal/article-by-journal.component';
import { ArticleByCategorieComponent } from './article-by-categorie/article-by-categorie.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AdminComponent } from './admin/admin.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavbarComponent,
    DetailArticleComponent,
    ArticleByJournalComponent,
    ArticleByCategorieComponent,
    LoginFormComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AppRoutingModule,
  InfiniteScrollModule
  ],
  providers: [FacebookService,ArticleService,NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
