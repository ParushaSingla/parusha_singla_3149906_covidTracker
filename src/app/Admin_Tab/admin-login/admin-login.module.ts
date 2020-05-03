import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryLoginDataService } from '../../Core/services/admin-and-news-service/in-memory-database-details';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { addNewsModule } from '../add-news-portal/app-news-portal.module';

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule,
    HttpClientInMemoryWebApiModule.forRoot(

      InMemoryLoginDataService, { dataEncapsulation: false,passThruUnknownUrl: true, }
    ),
  ],
  exports: [
    AdminLoginComponent,
    RouterModule,
    HttpClientInMemoryWebApiModule,
  ]
})

export class adminLoginModule {
  constructor() {
  }
 }
