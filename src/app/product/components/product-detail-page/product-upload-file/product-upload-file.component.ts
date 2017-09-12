import { Component, OnInit, Input } from '@angular/core';
import { FileDropModule } from 'ngx-file-drop/lib/ngx-drop';

import { UploadFile } from './upload-file.model';
import { UploadEvent } from './upload-event.model';

@Component({
  selector: 'app-product-upload-file',
  templateUrl: './product-upload-file.component.html',
  styleUrls: ['./product-upload-file.component.scss']
})
export class ProductUploadFileComponent implements OnInit {

  // myfile={
  //   "name": '',
  //   "file": ''
  // }
  @Input() title: any; 
  public files: UploadFile[] = [];

  constructor() { }

  ngOnInit() {
  }

  public dropped(event: UploadEvent){
    this.files = event.files;
    for (var file of event.files){
      file.fileEntry.file(info => {
        console.log(info);
      })
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

  // fileChangeEvent(fileInput: any){
  //   this.myfile.file = fileInput.target.files;
  // }

}
