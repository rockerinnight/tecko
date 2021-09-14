import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, LayoutModule, NgxSpinnerModule],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
