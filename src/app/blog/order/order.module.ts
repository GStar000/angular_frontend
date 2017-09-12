import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderRoutes } from './order.routes';
import { OrderRoutes as routes} from './order.routes';
import { OrderComponent } from './order.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderComponent]
})
export class OrderModule { }
