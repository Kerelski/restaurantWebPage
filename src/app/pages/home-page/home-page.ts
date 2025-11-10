import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {Timeline} from 'primeng/timeline';
import {Card} from 'primeng/card';
import {AnimateOnScroll} from 'primeng/animateonscroll';
import {Button} from 'primeng/button';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {Footer} from '../../components/footer/footer';
import {Carousel} from 'primeng/carousel';
import {PrimeTemplate} from 'primeng/api';

@Component({
  selector: 'home-page',
  imports: [
    TranslatePipe,
    Timeline,
    Card,
    AnimateOnScroll,
    Button,
    NgOptimizedImage,
    NgClass,
    Footer,
    Carousel,
    PrimeTemplate,
  ],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage implements AfterViewInit, OnInit {
  @ViewChild('myVideo') videoRef!: ElementRef<HTMLVideoElement>;

  router = inject(Router);

  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;

    video.addEventListener('canplay', async () => {
      video.playbackRate = 0.5;
      try {
        await video.play();
      } catch (err) {
        console.warn('Autoplay zablokowane, odtwarzanie ruszy po interakcji:', err);
      }
    });
  }

  images: string[] = [];

  ngOnInit() {
    const baseUrl = 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/gallery/';
    const count = 6;
    this.images = Array.from({ length: count }, (_, i) => `${baseUrl}gallery${i + 1}.jpg`);
  }

  events: any[];

  constructor() {
    this.events = [
      { index: 1, header: 'local_suppliers', description: 'local_suppliers_description', icon: 'pi pi-arrow-down', image: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/farmer.png' },
      { index: 2, header: 'fresh_products', description: 'fresh_products_description', icon: 'pi pi-arrow-down', image: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/steak.png' },
      { index: 3, header: 'experienced_chefs', description: 'experienced_chefs_description', icon: 'pi pi-arrow-down', image: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/chef.png' },
      { index: 4 ,header: 'rich_taste', description: 'rich_taste_description', icon: 'pi pi-arrow-down', image: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/cooked_steak.PNG'}
    ];
  }

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

}
