import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResourcesRoutes } from './resources.routes';
import { ResourcesRoutes as routes} from './resources.routes';
import { TrainingVideoComponent } from './training-video/training-video.component';
import { ResourcesComponent } from './resources.component';
import { ManualComponent } from './manual/manual.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ResourcesComponent,
    ManualComponent,
    TrainingVideoComponent
  ]
})
export class ResourcesModule { }
