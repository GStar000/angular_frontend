import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

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

export const ProductsRoutes : Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
        { path: 'dentca-over', component: PdDentca4Component},
        { path: 'dentca-temp', component: PdTempComponent},
        { path: 'dentca-imd', component: PdImmediateComponent},
        { path: 'dentca-print', component: PdPrintComponent},
        { path: 'dentca-protocols', component: PdProtocolsComponent},
        { path: 'dentca-why', component: PdWhydentComponent},
        { path: 'dentca-faq', component: PdFaqComponent},
        { path: 'dentca-become', component: PdBecomeComponent},
        { path: 'dentca-app', component: PdDentappComponent},
        { path: 'dentca-temp-what', component: PdTempWhatComponent},
        { path: 'dentca-temp-pro', component: PdTempProtocolsComponent},        
        { path: 'dentca-imm-what', component: PdImmWhatComponent},
        { path: 'dentca-imm-pro', component: PdImmProComponent},
        { path: 'dentca-protocols/protocol1', component: PdProtocol1Component},
        { path: 'dentca-protocols/protocol2', component: PdProtocol2Component},
        { path: 'dentca-protocols/protocol3', component: PdProtocol3Component},
        { path: 'dentca-protocols/protocol4', component: PdProtocol4Component},
        { path: 'dentca-protocols/protocol5', component: PdProtocol5Component},
        { path: 'dentca-protocols/protocol6', component: PdProtocol6Component},
        { path: 'dentca-protocols/protocol7', component: PdProtocol7Component},
        { path: 'dentca-protocols/protocol8', component: PdProtocol8Component},
        { path: 'dentca-protocols/protocol9', component: PdProtocol9Component},
        { path: 'dentca-protocols/protocol10', component: PdProtocol10Component},
        { path: 'dentca-protocols/protocol11', component: PdProtocol11Component},
    ]
  },
];