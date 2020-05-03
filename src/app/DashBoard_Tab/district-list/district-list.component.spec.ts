import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { DistrictListComponent } from './district-list.component';

describe('DistrictListComponent', () => {
  let component: DistrictListComponent;
  let fixture: ComponentFixture<DistrictListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictListComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
