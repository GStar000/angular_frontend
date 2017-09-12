import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ProductsRoutes } from './products.routes';
import { ProductsComponent } from './products.component';
import { ProductsRoutes as routes} from './products.routes';
import { PdDentca4Component } from './pd-dentca4/pd-dentca4.component';
import { PdTempComponent } from './pd-temp/pd-temp.component';
import { PdImmediateComponent } from './pd-immediate/pd-immediate.component';
import { PdPrintComponent } from './pd-print/pd-print.component';
import { PdProtocolsComponent } from './pd-protocols/pd-protocols.component';
import { PdWhydentComponent } from './pd-whydent/pd-whydent.component';
import { PdFaqComponent } from './pd-faq/pd-faq.component';
import { PdBecomeComponent } from './pd-become/pd-become.component';
import { PdDentappComponent } from './pd-dentapp/pd-dentapp.component';
import { PdTempWhatComponent } from './pd-temp/pd-temp-what/pd-temp-what.component';
import { PdTempProtocolsComponent } from './pd-temp/pd-temp-protocols/pd-temp-protocols.component';
import { PdImmWhatComponent } from './pd-immediate/pd-imm-what/pd-imm-what.component';
import { PdImmProComponent } from './pd-immediate/pd-imm-pro/pd-imm-pro.component';
import { PdProtocol1Component } from './pd-protocols/pd-protocol1/pd-protocol1.component';
import { PdProtocol2Component } from './pd-protocols/pd-protocol2/pd-protocol2.component';
import { PdProtocol3Component } from './pd-protocols/pd-protocol3/pd-protocol3.component';
import { PdProtocol4Component } from './pd-protocols/pd-protocol4/pd-protocol4.component';
import { PdProtocol5Component } from './pd-protocols/pd-protocol5/pd-protocol5.component';
import { PdProtocol6Component } from './pd-protocols/pd-protocol6/pd-protocol6.component';
import { PdProtocol7Component } from './pd-protocols/pd-protocol7/pd-protocol7.component';
import { PdProtocol8Component } from './pd-protocols/pd-protocol8/pd-protocol8.component';
import { PdProtocol9Component } from './pd-protocols/pd-protocol9/pd-protocol9.component';
import { PdProtocol10Component } from './pd-protocols/pd-protocol10/pd-protocol10.component';
import { PdProtocol11Component } from './pd-protocols/pd-protocol11/pd-protocol11.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent,
    PdDentca4Component, 
    PdTempComponent, 
    PdImmediateComponent, 
    PdPrintComponent, 
    PdProtocolsComponent, 
    PdWhydentComponent, 
    PdFaqComponent, 
    PdBecomeComponent, 
    PdDentappComponent, 
    PdTempWhatComponent, 
    PdTempProtocolsComponent, 
    PdImmWhatComponent, 
    PdImmProComponent, 
    PdProtocol1Component, 
    PdProtocol2Component, 
    PdProtocol3Component, 
    PdProtocol4Component, 
    PdProtocol5Component, 
    PdProtocol6Component,
    PdProtocol7Component,
    PdProtocol8Component,
    PdProtocol9Component,
    PdProtocol10Component,
    PdProtocol11Component
  ]

})
export class ProductsModule { }
