// This is dashboard feature module.
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DistrictListComponent } from '../district-list/district-list.component';
import { SharedMaterialModule } from '../../shared/shared-material.module';

@NgModule({
  declarations: [DashboardComponent,DistrictListComponent],
  imports: [
    SharedMaterialModule,
    HttpClientModule,
  ],
  exports: [
    DashboardComponent,
  ]
})

export class DashboardModule {
  constructor() {
  }
 }
