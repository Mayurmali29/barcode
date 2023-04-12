import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { BrowserMultiFormatReader, IScannerControls } from '@zxing/browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UimoduleModule } from './uimodule/uimodule.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ZXingScannerModule,
    BrowserAnimationsModule,
    UimoduleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
