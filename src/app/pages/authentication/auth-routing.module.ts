import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'src/app/core/constants/path.enum';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Path.LogIn,
    pathMatch: 'full',
  },
  {
    path: Path.LogIn,
    component: LoginComponent,
  },
  {
    path: Path.SignUp,
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
