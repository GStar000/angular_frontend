import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus.component';

export const AboutusRoutes : Routes = [
  {
    path: '',
    component: AboutusComponent,
    children: [
    ]
  },
];