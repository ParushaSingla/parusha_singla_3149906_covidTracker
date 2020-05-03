import { Injectable } from '@angular/core';
import { INews } from '../../../shared/models/INews';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private apiUrl = 'api/newsDetail';
  private newsData: INews[];

  constructor(private http: HttpClient) {}

  getNews(): Observable<INews[]>{
    return this.http.get<INews[]>(this.apiUrl);
    // var news = JSON.parse(localStorage.getItem('newsList'));
    // return news;
  }

  addNews(newNews: INews) :Observable<INews>{
    return this.http.post<INews>(this.apiUrl, newNews, httpOptions);
    // if (JSON.parse(localStorage.getItem('newsList')) === null) {
    //   this.newsData = [];
    // } else {
    //   this.newsData = JSON.parse(localStorage.getItem('newsList'));
    // }
    // newNews.id = this.genId(this.newsData);
    // this.newsData.push(newNews);
    // localStorage.setItem('newsList', JSON.stringify(this.newsData));
  }

}
