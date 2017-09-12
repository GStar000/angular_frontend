import { CheckoutService } from './../../../../../core/services/checkout.service';
import { CheckoutActions } from './../../../../actions/checkout.actions';
import { AppState } from './../../../../../interfaces';
import { Store } from '@ngrx/store';
import { environment } from './../../../../../../environments/environment';
import { LineItem } from './../../../../../core/models/line_item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {

  image: string;
  name: string;
  quantity: number;
  amount: number;
  context: string;

  @Input() lineItem: LineItem;

  constructor(private store: Store<AppState>, private actions: CheckoutActions, private checkoutService: CheckoutService) { }

  ngOnInit() {
    if (this.lineItem.variant.images[0])
      this.image = environment.API_ENDPOINT + this.lineItem.variant.images[0].product_url;
    else
      this.image = "assets/logo.png";

    this.name = this.lineItem.variant.name;
    this.quantity = this.lineItem.quantity;
    this.amount = this.lineItem.display_amount;
    this.context = this.lineItem.order_infos[0].context;
    console.log("LineItem", this.lineItem);
  }

  // Change this method once angular releases RC4
  // Follow this linke to know more about this issue https://github.com/angular/angular/issues/12869
  removeLineItem() {
    // this.store.dispatch(this.actions.removeLineItem(this.lineItem.id));
    this.checkoutService.deleteLineItem(this.lineItem)
      .subscribe();
  }

}
