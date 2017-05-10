import { Component, OnInit,Input } from '@angular/core';
import { ArticleService } from '../services/article.service';
import {Article} from '../ModelBinding/article';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {Journal} from '../ModelBinding/journal';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css'],
  providers: [ArticleService]
})
export class DetailArticleComponent implements OnInit {


 article:Article;
 journal: Journal;
  constructor(private service: ArticleService,private route: ActivatedRoute, private router: Router) 
  { }

  ngOnInit() :void {
  console.log("detail from datil componeent");
this.route.params.switchMap((params:Params) => this.service.getArticle(params['_id']))
      .subscribe((article : Article)=>this.article = article);

  //this.route.params.switchMap((params:Params) => this.service.getjournalByArticle(params[this.article._journal])).subscribe((journal : Journal)=>this.journal = journal);
  }

}
