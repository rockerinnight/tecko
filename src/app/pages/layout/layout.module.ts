import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TrendItemComponent } from './trend-item/trend-item.component';
import { ArticleNewBoxComponent } from './article-new-box/article-new-box.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleNewButtonComponent } from './article-new-button/article-new-button.component';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileCardComponent } from './profile-card/profile-card.component';

const componentList = [
  SidenavComponent,
  SearchBoxComponent,
  TrendItemComponent,
  ArticleNewBoxComponent,
  ArticleItemComponent,
  ArticleNewButtonComponent,
  ProfileCardComponent,
];

@NgModule({
  declarations: [...componentList],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, QuillModule],
  exports: [...componentList],
})
export class LayoutModule {}
