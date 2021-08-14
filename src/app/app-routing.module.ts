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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
