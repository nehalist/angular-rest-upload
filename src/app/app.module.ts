import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Base64UploadComponent } from './base64-upload/base64-upload.component';
import { FormdataUploadComponent } from './formdata-upload/formdata-upload.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    Base64UploadComponent,
    FormdataUploadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
