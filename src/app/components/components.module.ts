import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { UserCardComponent } from './user-card/user-card.component';
import { TrendListComponent } from './trend-list/trend-list.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { UserCardListComponent } from './user-card-list/user-card-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogoComponent } from './logo/logo.component';
import { ArticleLoadingComponent } from './article-loading/article-loading.component';
import { SharedModule } from '../shared/shared.module';

const componentList = [
  SidenavComponent,
  SearchBoxComponent,
  UserCardComponent,
  TrendItemComponent,
  TrendListComponent,
  ArticleNewBoxComponent,
  ArticleNewButtonComponent,
  ArticleItemComponent,
  ArticleListComponent,
  UserCardListComponent,
  ArticleLoadingComponent,
  LogoComponent,
];

@NgModule({
  declarations: [...componentList],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    QuillModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    SharedModule,
  ],
  exports: [...componentList],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
