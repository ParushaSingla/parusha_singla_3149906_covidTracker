import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AdminBasePageComponent } from './admin-base-page.component';
import { AdminLoginComponent } from '@app/Admin_Tab/admin-login/admin-login.component';
import { LoginCanActivateGuard } from '@app/Admin_Tab/admin-login/LoginAdmin-can-activate.guard';
import { AddNewsPortalComponent } from '@app/Admin_Tab/add-news-portal/add-news-portal.component';

export const adminRoutes: Routes = [
  {path: '', component: AdminLoginComponent},
  {path: 'addNews', component: AddNewsPortalComponent,canActivate:[LoginCanActivateGuard]},
];

@NgModule({
  declarations: [AdminBasePageComponent],
  imports: [
   RouterModule
  ],
  exports: [
    RouterModule
  ]
})

export class AdminRoutingModule { }
