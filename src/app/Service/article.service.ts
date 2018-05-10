import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }


  getArticle() {
    return this.http.get('http://localhost:8080/article/');
  }

  addArticle(c) {
    return this.http.post('http://localhost:8080/article/addArticle', c );
  }


  }


