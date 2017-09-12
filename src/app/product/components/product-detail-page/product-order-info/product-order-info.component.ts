import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-order-info',
  templateUrl: './product-order-info.component.html',
  styleUrls: ['./product-order-info.component.scss']
})
export class ProductOrderInfoComponent implements OnInit {
  @Input() optionTypes: any;
  constructor() { }

  orderOption = [];

  ngOnInit() {
    console.log("optionTypes", this.optionTypes);
    this.optionTypes.forEach(option => {
      if (option.comment){
        this.orderOption.push(option);
      }
    });
    console.log("orderOption", this.orderOption);
  }
}
