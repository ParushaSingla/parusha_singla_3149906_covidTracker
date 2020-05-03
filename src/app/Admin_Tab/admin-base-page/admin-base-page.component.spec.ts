import { async, ComponentFixture, TestBed, fakeAsync, tick, getTestBed } from '@angular/core/testing';

import { AdminBasePageComponent } from './admin-base-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { adminRoutes } from './admin-login-routing.module';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';
describe('AdminBasePageComponent', () => {
  let component: AdminBasePageComponent;
  let fixture: ComponentFixture<AdminBasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBasePageComponent ],
      imports: [
        RouterTestingModule.withRoutes(adminRoutes),
        HttpClientTestingModule,
        ReactiveFormsModule,
        SharedMaterialModule
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
