import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  imports: [CommonModule, MDBBootstrapModule],
  exports: [MDBBootstrapModule],
})
export class BootstrapModule {}
