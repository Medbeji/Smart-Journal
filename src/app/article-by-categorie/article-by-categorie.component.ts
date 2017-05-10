import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

import {ActivatedRoute,Params,Router} from '@angular/router';
@Component({
  selector: 'app-article-by-categorie',
  templateUrl: './article-by-categorie.component.html',
  styleUrls: ['./article-by-categorie.component.css']
})
export class ArticleByCategorieComponent implements OnInit {
articles:any;
  constructor(private service: ArticleService,private route: ActivatedRoute, private router: Router) 
  { }

  ngOnInit() {
  this.getArticles();
  
  }

   getArticles() {
    console.log("Article from component ArticleByCategori");
    this.articles = [] ; 
  

    this.route.params.switchMap((params:Params) => this.service.getArticleByCategorie(params['_id']))
      .subscribe(data => this.articles = data);

  }
}
