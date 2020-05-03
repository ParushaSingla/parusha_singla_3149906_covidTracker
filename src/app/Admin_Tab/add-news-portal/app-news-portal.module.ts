// This is admin Login feature module.
import { NgModule } from '@angular/core';
import { AddNewsPortalComponent } from './add-news-portal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from '@app/shared/shared-material.module';

@NgModule({
  declarations: [AddNewsPortalComponent],
  imports: [
   ReactiveFormsModule,
   SharedMaterialModule
  ],
  exports: [

  ]
})

export class addNewsModule {

 }
