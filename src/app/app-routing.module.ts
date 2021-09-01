import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from './core/constants/path.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: Path.Home,
    pathMatch: 'full',
  },
  {
    path: Path.Home,
    loadChildren: () =>
      import('src/app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: Path.Explore,
    loadChildren: () =>
      import('src/app/pages/explore/explore.module').then(
        (m) => m.ExploreModule
      ),
  },
  {
    path: Path.Bookmarks,
    loadChildren: () =>
      import('src/app/pages/bookmark/bookmark.module').then(
        (m) => m.BookmarkModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('src/app/pages/session/session.module').then(
        (m) => m.SessionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
