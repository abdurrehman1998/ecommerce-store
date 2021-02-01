import { MaterialModule } from '@ecommerce/material';
import { BootstrapModule } from '@ecommerce/bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, ProductThumbnailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
