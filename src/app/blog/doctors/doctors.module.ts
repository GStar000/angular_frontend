import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DoctorsRoutes } from './doctors.routes';
import { DoctorsComponent } from './doctors.component';
import { DoctorsRoutes as routes} from './doctors.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoctorsComponent]
})
export class DoctorsModule { }
