import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleNewBoxComponent } from 'src/app/components/article-new-box/article-new-box.component';
import { Path } from 'src/app/core/constants/path.enum';
import { ArticleComponent } from './article.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Path.New,
    pathMatch: 'full',
  },
  {
    path: Path.New,
    component: ArticleComponent,
  },
  // {
  // 	path:'/:slug',
  // 	component: ArticleDetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
