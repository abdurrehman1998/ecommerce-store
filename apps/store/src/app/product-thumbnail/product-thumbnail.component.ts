import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecommerce-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css'],
})
export class ProductThumbnailComponent {
  @Input() imgSrc: string;
}
