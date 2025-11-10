import { Component } from '@angular/core';
import {Footer} from '../../components/footer/footer';
import {TranslatePipe} from '@ngx-translate/core';
import {Image} from 'primeng/image';
import {AnimateOnScroll} from 'primeng/animateonscroll';

@Component({
  selector: 'gallery-page',
  imports: [
    Footer,
    TranslatePipe,
    Image,
    AnimateOnScroll
  ],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.css',
})
export class GalleryPage {

  images: any = []
  constructor() {
    this.images = [
      { index: 1, src: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/gallery/gallery1.jpg' },
      { index: 2, src: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/gallery/gallery2.jpg' },
      { index: 3, src: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/gallery/gallery3.jpg' },
      { index: 4, src: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/gallery/gallery4.jpg' },
      { index: 5, src: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/gallery/gallery5.jpg' },
      { index: 6, src: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/gallery/gallery6.jpg' },
    ];
  }
}
