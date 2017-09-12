import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/index';

import { RouterModule } from '@angular/router';

// For Temp Puropose
// TODO: Remove this from here
import { ProductService } from './../core/services/product.service';

// Components
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ProductDetailsComponent } from './components/product-detail-page/product-details/product-details.component';
import { ProductDescriptionComponent } from './components/product-detail-page/product-description/product-description.component';
import { ProductImagesComponent } from './components/product-detail-page/product-images/product-images.component';
import { ProductPriceInfoComponent } from './components/product-detail-page/product-price-info/product-price-info.component';
import { ProductVariantsComponent } from './components/product-detail-page/product-variants/product-variants.component';
import { ProductComponent } from './product.component';
import { ProductOrderInfoComponent } from './components/product-detail-page/product-order-info/product-order-info.component';
import { ProductUploadFileComponent } from './components/product-detail-page/product-upload-file/product-upload-file.component';
import { FileDropModule } from 'ngx-file-drop/lib/ngx-drop';


// Routes
import { ProductRoutes as routes } from './product.routes';

// Effects
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';


@NgModule({
  declarations: [
    // components
    ProductDetailPageComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductImagesComponent,
    ProductPriceInfoComponent,
    ProductDescriptionComponent,
    ProductVariantsComponent,
    ProductOrderInfoComponent,
    ProductUploadFileComponent,
    // pipes
  ],
  exports: [
    // components
    ProductDetailPageComponent,
    ProductDetailsComponent,
    ProductImagesComponent,
    ProductPriceInfoComponent,
    ProductDescriptionComponent,
    ProductVariantsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
        FileDropModule
  ],
  providers: [
  ]
})
export class ProductModule {}
