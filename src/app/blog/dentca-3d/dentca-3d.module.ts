import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { Dentca3dRoutes } from './dentca-3d.routes';
import { Dentca3dComponent } from './dentca-3d.component';
import { Dentca3dRoutes as routes} from './dentca-3d.routes';
import { MapComponent } from '../../shared/components/map/map.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Dentca3dComponent,
    MapComponent
  ]
})
export class Dentca3dModule { }
