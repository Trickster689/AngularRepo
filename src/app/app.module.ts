import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileUploadModule,GrowlModule }  from 'primeng/primeng';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UploadWidgetComponent } from './upload-widget/upload-widget.component';
import { FileUploadModule as FileUploadWidgetModule} from 'ng2-file-upload';



@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    UploadWidgetComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    GrowlModule,
    FileUploadWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
