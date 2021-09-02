import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'src/app/core/constants/path.enum';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: Path.Articles,
  //   pathMatch: 'full',
  // },
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
