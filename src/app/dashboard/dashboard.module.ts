import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '@angular/material';

import { RouterModule } from '@angular/router';

import { DashRoutes } from './dashboard.routes';
import { DashRoutes as routes} from './dashboard.routes';
import { ProductService } from '../core/services/product.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    ProductService
  ]
})
export class DashboardModule { }
