import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { WelcomeRoutes } from './welcome.routes';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutes as routes} from './welcome.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
