import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'
import 'rxjs/add/operator/toPromise';;
import {Article} from '../ModelBinding/article';
import {Journal} from '../ModelBinding/journal';
@Injectable()
export class ArticleService {
  endpoint_url:string="http://smartjournal.herokuapp.com/api/article";
   articlebyjournal:string="https://smartjournal.herokuapp.com/api/journal";
	 journal_url:string="https://smartjournal.herokuapp.com/api/categorie";
  constructor(private http:Http) {
    this.http = http
   }

  getjournalByArticle(_journal:string) :Promise<Journal>
	{	const url=`${this.articlebyjournal}/${_journal}`;
	return this.http.
	get(url).
	toPromise().
	then(response => response.json()).
   then(journal => new Journal(journal)).
	catch(this.handleError);
	}

    getArticle(ArticleId : string):Promise<Article>
	{
	const url=`${this.endpoint_url}/${ArticleId}`;
	console.log(url);
	return this.http.
	get(url).
	toPromise().
	then(response => response.json()).
   then(article => new Article(article)).
	catch(this.handleError);
  }


	getArticleByCategorie(ArticleId : string)
	{
	const url=`${this.journal_url}/${ArticleId}/article`;
	console.log(url);
	 return this.http.get(url).map(res => res.json());
	}


	getArticleByJournal(ArticleId : string)
	{
	const url=`${this.articlebyjournal}/${ArticleId}/article`;
	console.log(url);
	 return this.http.get(url).map(res => res.json());
	}

	private handleError(error: any): Promise<any>
	{
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  getArticles()
  {
    console.log("Message from service article");
    return this.http.get(this.endpoint_url).map(res => res.json());
  }

	getArticleBlock(start,end){
		console.log("Hello from "+start+" To "+end);
		return this.http.get(this.endpoint_url+"?limit="+end).map(res => res.json());
	}

}
