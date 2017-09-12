import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { VariantParserService } from './../../../../core/services/variant-parser.service';
import { environment } from './../../../../../environments/environment';

interface CurrentSelectedOptionsType {
  [key: string]: String;
};

@Component({
  selector: 'app-product-variants',
  templateUrl: './product-variants.component.html',
  styleUrls: ['./product-variants.component.scss']
})
export class ProductVariantsComponent implements OnInit {
  @Input() customOptionTypesHash: any;
  @Input() currentSelectedOptions = {};
  @Input() mainOptions;
  @Input() correspondingOptions;
  @Output() onOptionClickEvent = new EventEmitter();
  @Input() optionTypes: any;
  isComment: boolean;
  isChecked = false;

  myfile={
    "name": '',
    "file": ''
  }

  constructor() {
  }

  ngOnInit() {
    console.log("custom", this.customOptionTypesHash);
    this.isComment = false;
 }

  onOptionClick(option) {
    console.log("here");
    this.onOptionClickEvent.emit(option);
  }

  isDisabled(arrayTocheck, value) {
    if (arrayTocheck)
      return (arrayTocheck.indexOf(value) === -1);
  }

  resetFlag(){
    this.isComment = !this.isComment;
    console.log(this.isComment);
    return this.isComment;
  }
  getProductImageUrl(url) {
    var temp = url + "";
    if (temp.charAt(temp.length - 1) == '/')
      return false;
    else
      return environment.API_ENDPOINT + url;
  }

  fileChangeEvent(fileInput: any){
    this.myfile.file = fileInput.target.files;
  }
}
