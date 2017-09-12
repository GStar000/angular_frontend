import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

export const WelcomeRoutes : Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
        {path:'', component: WelcomeComponent}
    ]
  },
];