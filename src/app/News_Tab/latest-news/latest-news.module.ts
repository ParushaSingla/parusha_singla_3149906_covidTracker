// This is dashboard feature module.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestNewsComponent } from './latest-news.component';
@NgModule({
  declarations: [LatestNewsComponent],
  imports: [CommonModule],
  exports: [CommonModule],
})
export class latestNewsModule {
  constructor() {}
}
