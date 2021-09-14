import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ExploreComponent],
  imports: [CommonModule, ExploreRoutingModule, ComponentsModule],
})
export class ExploreModule {}
