import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserComponent } from './user.component';
import { UserMainContentComponent } from './user-main-content/user-main-content.component';

@NgModule({
  declarations: [UserComponent, UserMainContentComponent],
  imports: [CommonModule, UserRoutingModule, ComponentsModule],
})
export class UserModule {}
