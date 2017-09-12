import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import { TrainingVideoComponent } from './training-video/training-video.component';
import { ManualComponent } from './manual/manual.component';

export const ResourcesRoutes : Routes = [
  {
    path: '',
    component: ResourcesComponent,
    children: [
        { path: 'training-video', component: TrainingVideoComponent},
        { path: 'manual', component: ManualComponent },
    ]
  },
];