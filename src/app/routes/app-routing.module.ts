import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent}   from '../article/article.component';
import { DetailArticleComponent }      from '../detail-article/detail-article.component';
import { ArticleByJournalComponent}   from '../article-by-journal/article-by-journal.component';
import { AdminComponent } from '../admin/admin.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { ArticleByCategorieComponent}   from '../article-by-categorie/article-by-categorie.component';
const routes: Routes = [
  { path: '', redirectTo: 'article', pathMatch: 'full' },
  { path: 'article',
  children: [
    { path: '', component: ArticleComponent },
    { path: 'detail/:_id', component: DetailArticleComponent },
    { path: 'journal/:_id', component: ArticleByJournalComponent },
    { path: 'categorie/:_id', component: ArticleByCategorieComponent }, ]
  },

  { path: 'login',
  children: [
    { path: '', component: LoginFormComponent } ,
    { path: 'admin', component: AdminComponent }
  ]
},

//{ path: 'article/detail/:_id', component: DetailArticleComponent },
// { path: 'article/journal/:_id', component: ArticleByJournalComponent },
//{ path: 'article/categorie/:_id', component: ArticleByCategorieComponent },
//{ path: 'login/admin', component: AdminComponent },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
