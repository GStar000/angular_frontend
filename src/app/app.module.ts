import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import 'hammerjs';

// Components
import { AppComponent } from './app.component';
// Routes
import { routes } from './app.routes';
// Modules
import { SharedModule } from './shared/index';
import { UserModule } from './user/index';
import { HomeModule } from './home/index';
import { LayoutModule } from './layout/index';
import { CoreModule } from './core/index';
import { BlogModule } from './blog/blog.module';
import { StoreModule } from '@ngrx/store';
import { DashboardModule } from './dashboard/dashboard.module';
// import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { reducer } from './app.reducers';
import { CheckoutHeaderComponent } from './layout/checkout-header/checkout-header.component';
import { CheckoutFooterComponent } from './layout/checkout-footer/checkout-footer.component';

// adding rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';
import { AboutusComponent } from './blog/aboutus/aboutus.component';
import { Dentca3dComponent } from './blog/dentca-3d/dentca-3d.component';
import { ResourcesComponent } from './blog/resources/resources.component';
import { NewsComponent } from './blog/news/news.component';
import { DashHeaderComponent } from './layout/dash-header/dash-header.component';
import { DashFooterComponent } from './layout/dash-footer/dash-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    CheckoutHeaderComponent,
    CheckoutFooterComponent,
    DashHeaderComponent,
    DashFooterComponent,
    // MapComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    HomeModule,
    LayoutModule,
    CoreModule,
    BlogModule,
    SharedModule,
    NoopAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
