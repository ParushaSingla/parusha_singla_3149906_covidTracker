import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { LatestNewsComponent } from './latest-news.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryLoginDataService } from '@app/Core/services/admin-and-news-service/in-memory-database-details';
import { NewsService } from '@app/Core/services/admin-and-news-service/news.service';
import { mockNewsService, mockNewsData } from '@app/Core/mock-data/news.data';


describe('LatestNewsComponent', () => {
  let component: LatestNewsComponent;
  let fixture: ComponentFixture<LatestNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LatestNewsComponent],
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryLoginDataService, {
          dataEncapsulation: false,
          passThruUnknownUrl: true,
        }),
      ],
      providers: [{ provide: NewsService, useValue: mockNewsService() }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('to be shown news data', fakeAsync(() => {
    tick();
    expect(component.newsToBeShown).toEqual(mockNewsData);
  }));
  it('check hide button functionality', fakeAsync(() => {
    tick();
    component.moreInfo(2);
    expect(component.hideFullNews).toBe(true);
  }));
});
