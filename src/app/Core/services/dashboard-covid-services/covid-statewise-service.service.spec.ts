import { TestBed, fakeAsync, tick, flush } from '@angular/core/testing';

import { CovidStatewiseServiceService } from './covid-statewise-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockStateWiseData, mockDistrictWiseData } from '@app/Core/mock-data/covid-statewise-service.service.data';

describe('CovidStatewiseServiceService', () => {
  let service: CovidStatewiseServiceService;
  let httpMock:HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CovidStatewiseServiceService,
      ],
    });
    service = TestBed.inject(CovidStatewiseServiceService);
    httpMock=TestBed.inject(HttpTestingController)
  });
  afterEach(()=>{
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get state fdata via get', fakeAsync(() => {
     service.getStateWiseDetails().subscribe((data)=>{
       expect(data).toEqual(mockStateWiseData)
     })
     tick();
     const req = httpMock.expectOne({method: 'GET', url:service.apiUrl});
     expect(req.request.method).toEqual('GET');
     req.flush(mockStateWiseData);
  }));

});
