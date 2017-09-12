import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors.component';

export const DoctorsRoutes : Routes = [
  {
    path: '',
    component: DoctorsComponent,
    children: [
    ]
  },
];