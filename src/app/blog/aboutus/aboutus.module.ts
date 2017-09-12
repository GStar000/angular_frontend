import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AboutusRoutes } from './aboutus.routes';
import { AboutusComponent } from './aboutus.component';
import { AboutusRoutes as routes} from './aboutus.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutusComponent]
})
export class AboutusModule { }
