import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../Service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
articles;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {

    this.articleService.getArticle().subscribe(res => {
      console.log(res.json());
      this.articles = res.json();
    });
  }

}
