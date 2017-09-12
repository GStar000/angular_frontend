import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: 'admin',
    // loadChildren: './dashboard/dashboard.module#DashboardModule'
    redirectTo: 'https://localhost:3000/admin'
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },
  {
    path: 'home',
    loadChildren: './home/index#HomeModule'
  },
  {
    path: 'home/:id',
    loadChildren: './home/index#HomeModule'
  },
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule'
  },
  {
    path: 'user',
    loadChildren: './user/index#UserModule',
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'product',
    loadChildren: './product/index#ProductModule'
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }
];
