import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from '@app/DashBoard_Tab/dashboard/dashboard.module';
import { adminLoginModule } from '@app/Admin_Tab/admin-login/admin-login.module';
import {  adminRoutes } from '@app/Admin_Tab/admin-base-page/admin-login-routing.module';
import { AdminBasePageComponent } from '@app/Admin_Tab/admin-base-page/admin-base-page.component';
import { LatestNewsComponent } from '@app/News_Tab/latest-news/latest-news.component';
import { PrecautionsComponent } from '@app/Precaution_Tab/precautions/precautions.component';
import { latestNewsModule } from '@app/News_Tab/latest-news/latest-news.module';
import { DashboardComponent } from '@app/DashBoard_Tab/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashBoard', pathMatch: 'full' },
  { path: 'dashBoard', component: DashboardComponent },
  { path: 'news', component: LatestNewsComponent },
  {path:'adminLogin',component:AdminBasePageComponent,children:[...adminRoutes] },
  { path:'precaution',component:PrecautionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    DashboardModule,
    latestNewsModule,
    adminLoginModule,
    ],
  exports: [RouterModule,
    adminLoginModule,
    latestNewsModule,
    DashboardModule,
    ]
})
export class AppRoutingModule { }
