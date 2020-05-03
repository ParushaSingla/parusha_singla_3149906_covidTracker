import { TestBed, tick, fakeAsync, flush } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  mockCovidStatewiseService,
  mockStateWiseData,
} from '@app/Core/mock-data/covid-statewise-service.service.data';
import { LoginService } from './login.service';
import { mockAdminDataService, mockGetUsers } from '@app/Core/mock-data/admin.data';
import { IAdminDetail } from '@app/shared/models/IAdminDetail';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryLoginDataService } from './in-memory-database-details';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        HttpClientInMemoryWebApiModule.forRoot(

          InMemoryLoginDataService, { dataEncapsulation: false,passThruUnknownUrl: true, }
        ),],
      providers: [
        LoginService,
        // { provide: LoginService, useValue: mockAdminDataService() },
      ],
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check validate function', fakeAsync(() => {
    let data:IAdminDetail[]= [{
      id: 1,
      username: 'admin',
      password: 'admin',
    }];
    let notAnAdmin:IAdminDetail={id:3,username:"abc",password:"abc"}
    service.loginData=data;
    tick();
    expect(service.validateUser(notAnAdmin)).toBeFalse;
    flush();
  }));

//   it('should get admin data via get', fakeAsync(() => {

//     service.getUsers().subscribe((dataServer)=>{
//       expect(dataServer).toEqual(mockGetUsers)
//     });
//     tick();
//     const req = httpMock.expectOne({method:'GET', url:service.apiUrl});
//     expect(req.request.method).toEqual('GET');
//     req.flush(mockGetUsers);
//     tick();
//  }));
});
