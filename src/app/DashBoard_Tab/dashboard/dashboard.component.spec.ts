import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CovidStatewiseServiceService } from '../../Core/services/dashboard-covid-services/covid-statewise-service.service';
import { mockCovidStatewiseService, mockStateWiseData,mockDistrictWiseData } from '../../Core/mock-data/covid-statewise-service.service.data';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[{provide:CovidStatewiseServiceService,useValue:mockCovidStatewiseService()}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should get State wise data",fakeAsync(()=>{
    tick();
    expect(component.stateData).toEqual(mockStateWiseData.statewise.slice(1));
  }));

  it("should get District wise data",fakeAsync(()=>{
    tick();
    expect(component.AllStateDistrictData).toEqual(mockDistrictWiseData);
  }));

  it("checking district function get all districts for paticular state",fakeAsync(()=>{
    var state="Andaman and Nicobar Islands";
    tick();
    expect(component.districts(state)).toEqual(mockDistrictWiseData[state].districtData);
  }));
});
