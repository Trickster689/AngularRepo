import {
  Component,
  OnInit
} from '@angular/core';
import {Message} from '../../../node_modules/primeng/components/common/api';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  msgs: Message[];
  uploadedFiles: any[] = [];
  
  constructor() {}

  ngOnInit() {}

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'File Uploaded',
      detail: ''
    });
    console.log("File Uploaded")
  }

}
