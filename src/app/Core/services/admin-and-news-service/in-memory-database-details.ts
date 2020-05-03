import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IAdminDetail } from '../../../shared/models/IAdminDetail';
import { INews } from '@app/shared/models/INews';
@Injectable({
  providedIn: 'root',
})
export class InMemoryLoginDataService implements InMemoryDbService {
  createDb() {
    const adminDetail: IAdminDetail[] = [
      {
        id: 1,
        username: 'admin',
        password: 'admin',
      },
    ];
    const newsDetail: INews[] = [
      {
        id: 1,
        title: 'No Change In GuidLine',
        description: 'SC Refuses to Pass Directions for Changing Guidelines on Covid-19 Treatment',
        summary: 'During the hearing, Ohio-based Indian origin doctor and PBT President Kunal Saha said he has not challenged the treatment line for Covid-19 per se but the use of HCQ and AZM combination has side effects and people are dying due to it.',
        fullNews: 'https://www.news18.com/news/india/sc-refuses-to-pass-directions-for-changing-guidelines-on-covid-19-treatment-2599337.html',
      },
      {
        id: 2,
        title: 'No Vaccine',
        description: '1-MIN READ With No Vaccine, Herd Immunity is Our Only Hope in Fight Against Coronavirus: Senior Scientist',
        summary: 'A senior scientist working on Randomised Control Trial (RCT) said a large number of the population would first get infected and then develop natural immunity against the virus, preventing it from spreading further.',
        fullNews: 'https://www.news18.com/news/india/with-no-vaccine-herd-immunity-is-our-only-hope-in-fight-against-coronavirus-senior-scientist-2599265.html',
      },
    ];
    return {adminDetail,newsDetail};
  }
  genId(newsDetail: INews[]): number {

    return newsDetail.length > 0
      ? Math.max(...newsDetail.map((news) => news.id)) + 1
      : 1;
  }
}
