import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
const URL = 'path_to_api';
@Component({
  selector: 'app-upload-widget',
  templateUrl: './upload-widget.component.html',
  styleUrls: ['./upload-widget.component.css']
})
export class UploadWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}
