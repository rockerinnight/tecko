import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from './core/constants/path.enum';
import { AuthGuard } from './pages/authentication/_helpers/auth.guard';
import { LoginGuard } from './pages/authentication/_helpers/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: Path.Home,
    pathMatch: 'full',
  },
  {
    path: Path.Auth,
    loadChildren: () =>
      import('src/app/pages/authentication/auth.module').then(
        (m) => m.AuthModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: Path.Home,
    loadChildren: () =>
      import('src/app/pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: Path.Explore,
    loadChildren: () =>
      import('src/app/pages/explore/explore.module').then(
        (m) => m.ExploreModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: Path.Favorites,
    loadChildren: () =>
      import('src/app/pages/favorite/favorite.module').then(
        (m) => m.FavoriteModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: Path.Articles,
    loadChildren: () =>
      import('src/app/pages/article/article.module').then(
        (m) => m.ArticleModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: Path.User,
    loadChildren: () =>
      import('src/app/pages/user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
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
