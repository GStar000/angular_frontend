import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './blog.routes';

import { BlogComponent } from './blog.component';
import { ResourcesModule } from './resources/resources.module';
import { NewsModule } from './news/news.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { Dentca3dModule } from './dentca-3d/dentca-3d.module';
import { DoctorsModule } from './doctors/doctors.module';
import { WelcomeModule } from './welcome/welcome.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';

@NgModule({
  imports: [
    CommonModule,
    WelcomeModule,
    ResourcesModule,
    AboutusModule,
    NewsModule,
    Dentca3dModule,
    DoctorsModule,
    ProductsModule,
    OrderModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BlogComponent
  ]
})
export class BlogModule { }
