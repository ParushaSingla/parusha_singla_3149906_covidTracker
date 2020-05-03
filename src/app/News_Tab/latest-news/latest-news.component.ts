import { Component, OnInit } from '@angular/core';
import { INews } from '@app/shared/models/INews';
import { NewsService } from '@app/Core/services/admin-and-news-service/news.service';


@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
})
export class LatestNewsComponent implements OnInit {
  newsToBeShown: INews[];
  hideFullNews:boolean;
  showForId:number;
  constructor(private newsService: NewsService) {
     newsService.getNews().subscribe((data)=>{
      this.newsToBeShown= data;
    });
  }

  ngOnInit(): void {
    this.hideFullNews=false;
  }

  moreInfo(newsId:number)
  {
    this.hideFullNews=(this.hideFullNews==true&&this.showForId==newsId)?false:true;
    this.showForId=newsId
  }
}
