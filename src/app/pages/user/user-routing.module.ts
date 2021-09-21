import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'src/app/core/constants/path.enum';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Path.NotFound,
    pathMatch: 'full',
  },
  {
    path: ':username',
    component: UserComponent,
    children: [
      {
        path: Path.Articles,
        component: UserComponent,
      },
      {
        path: `${Path.Articles}-favorited`,
        component: UserComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
