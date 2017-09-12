import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { CheckoutActions } from './../../../../checkout/actions/checkout.actions';
import { Variant } from './../../../../core/models/variant';
import { VariantRetriverService } from './../../../../core/services/variant-retriver.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { VariantParserService } from './../../../../core/services/variant-parser.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;
  customOptionTypesHash: any;
  currentSelectedOptions = {};
  description: any;
  images: any;
  mainOptions: any;
  correspondingOptions: any;
  variantId: any;
  variant: Product;
  product_price: any;
  variants = [];

  constructor(private variantParser: VariantParserService,
    private variantRetriver: VariantRetriverService,
    private checkoutActions: CheckoutActions,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    console.log("product", this.product);
    this.description = this.product.description;
    this.images = this.product.master.images;
    this.variantId = this.product.variants[0].id;
    this.customOptionTypesHash = this.variantParser
      .getOptionsToDisplay(this.product.variants, this.product.option_types);
    console.log("custom_option_type_hash", this.customOptionTypesHash);
    this.mainOptions = this.makeGlobalOptinTypesHash(this.customOptionTypesHash);
    console.log("mainOptions", this.mainOptions);
    this.correspondingOptions = this.mainOptions;
    this.product_price = Number(this.product.price);
  }

  /**
   * @param: option: { key: "small",
   *                   value: {optionValue: {etc etc},
   *                   variantIds: [1,2,3] }}
   */
  onOptionClick(option) {
    const result = new VariantRetriverService()
      .getVariant(this.currentSelectedOptions,
      this.customOptionTypesHash,
      option, this.product);
    this.createNewCorrespondingOptions(result.newCorrespondingOptions,
      option.value.optionValue.option_type_name);

    this.currentSelectedOptions = result.newSelectedoptions;
    const newVariant: Variant = result.variant;

    console.log("curent", this.currentSelectedOptions);

    this.variantId = this.product.variants[0].id;
    this.variants = [];
    var temp = parseFloat(this.product.price);
    for (const key in this.currentSelectedOptions){
      this.product.variants.forEach(variant => {
        if (variant.option_values.length == 1){
          if (variant.option_values[0].option_type_name == key && this.currentSelectedOptions[key] == variant.option_values[0].name){
            this.variants.push(variant.id);
            temp += parseFloat(variant.price);
          }
        }
      });
    }
    this.product_price = Number(temp);
    console.log("variants", this.variants);
    console.log("variant", this.variantId);
  }

  makeGlobalOptinTypesHash(customOptionTypes) {
    const temp = {};
    for (const key in customOptionTypes) {
      if (customOptionTypes.hasOwnProperty(key)) {
        temp[key] = Object.keys(customOptionTypes[key]);
      }
    };
    return temp;
  }

  createNewCorrespondingOptions(newOptions, optionKey) {
    for (const key in this.correspondingOptions) {
      if (this.correspondingOptions.hasOwnProperty(key) && key !== optionKey) {
        this.correspondingOptions[key] = newOptions[key];
      }
    }
  }

  addToCart(product: Product) {
    console.log("send cart");
    this.store.dispatch(this.checkoutActions.addToCart(this.variantId, this.variants));
  }
}
