import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const DashRoutes : Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    children: [

    ]
  },
];