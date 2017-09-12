import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';

import { RouterModule } from '@angular/router';
import { NewsRoutes } from './news.routes';
import { NewsRoutes as routes} from './news.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsComponent]
})
export class NewsModule { }
