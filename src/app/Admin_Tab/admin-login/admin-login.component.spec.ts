import { async, ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';

import { AdminLoginComponent } from './admin-login.component';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryLoginDataService } from '@app/Core/services/admin-and-news-service/in-memory-database-details';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginService } from '@app/Core/services/admin-and-news-service/login.service';
import { mockAdminDataService } from '@app/Core/mock-data/admin.data';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginComponent ],
      imports: [
      SharedMaterialModule,
      RouterTestingModule,
      ReactiveFormsModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(

        InMemoryLoginDataService, { dataEncapsulation: false,passThruUnknownUrl: true, }
      ),
      ],
      providers: [
        { provide: Router, useValue: mockRouter},
        {provide: LoginService,useValue:mockAdminDataService()}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  function updateForm(userEmail, userPassword) {
    component.loginForm.controls['username'].setValue(userEmail);
    component.loginForm.controls['password'].setValue(userPassword);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('component initial state', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  });
  it('form should be invalid if field is empty', fakeAsync(() => {
     updateForm("","");
     expect(component.loginForm.invalid).toBeTruthy();
  }));
  it('testing login function', fakeAsync(() => {
    updateForm("admin","admin")
    component.login(component.loginForm.value);
    tick();
    expect (mockRouter.navigate).toHaveBeenCalledWith (['adminLogin/addNews']);
    flush();

 }));

});
