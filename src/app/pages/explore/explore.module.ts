import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [ExploreComponent],
  imports: [CommonModule, ExploreRoutingModule, LayoutModule],
})
export class ExploreModule {}
