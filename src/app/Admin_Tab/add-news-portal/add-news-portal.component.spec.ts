import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AddNewsPortalComponent } from './add-news-portal.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedMaterialModule } from '@app/shared/shared-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
describe('AddNewsPortalComponent', () => {
  let component: AddNewsPortalComponent;
  let fixture: ComponentFixture<AddNewsPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsPortalComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        SharedMaterialModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));
  function updateForm(title, description,summary,fullNews) {
    component.newsForm.controls['title'].setValue(title);
    component.newsForm.controls['description'].setValue(description);
    component.newsForm.controls['summary'].setValue(summary);
    component.newsForm.controls['fullNews'].setValue(fullNews);
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should be invalid if field is empty', fakeAsync(() => {
    updateForm("","","","");
    tick();

    expect(component.newsForm.invalid).toBeTruthy();
 }));
 it('form should be invalid if fullUrl is not of Http file', fakeAsync(() => {
  updateForm("ABCDE","abcd","abcd","Not an http url");
  tick();
  expect(component.newsForm.invalid).toBeTruthy();
}));

});
