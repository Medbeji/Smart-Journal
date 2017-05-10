import { Component, OnInit , ViewChild } from '@angular/core';
import { ArticleService } from '.././services/article.service';
import {Router} from '@angular/router';
import {Article} from '../ModelBinding/article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})

export class ArticleComponent implements OnInit {

  articles: any;
  selectedArticleId: string = null;
  start = 10 ;
  end = 20;
 onSelect(artcle) {
        this.selectedArticleId = artcle.ArticleId;
    }
  constructor(private service: ArticleService,private route: Router) {
    this.service = service;
    this.route = route;
  }

  sleep(seconds)
  {
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) {}
  }

  ngOnInit() {

          this.getArticles();

  }

  onScroll(){
    console.log("scroll!!");

    this.service.getArticleBlock(this.start,this.end).subscribe(
      data => {
            this.articles = data
            this.start = this.start + 10 ;
            this.end = this.end  + 10 ;
      }
    )

  }


  getArticles() {
    console.log("Article from component Article");
    this.articles = [] ;
    this.service.getArticles().subscribe(
      data => this.articles = data
    );

  }

}
