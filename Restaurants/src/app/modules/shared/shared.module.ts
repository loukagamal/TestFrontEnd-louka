import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CoreModule
  ],
  exports :[
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
