import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './welcome/welcome.module#WelcomeModule'
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  },
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path: 'resources',
    loadChildren: './resources/resources.module#ResourcesModule'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsModule'
  },
  {
    path: 'aboutus',
    loadChildren: './aboutus/aboutus.module#AboutusModule'
  },
  {
    path: 'dentca-3d',
    loadChildren: './dentca-3d/dentca-3d.module#Dentca3dModule'
  },
  {
    path: 'doctors',
    loadChildren: './doctors/doctors.module#DoctorsModule'
  }
];

