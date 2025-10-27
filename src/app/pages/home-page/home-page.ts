import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {Timeline} from 'primeng/timeline';
import {Card} from 'primeng/card';
import {AnimateOnScroll} from 'primeng/animateonscroll';
import {Button} from 'primeng/button';
import {NgClass, NgOptimizedImage} from '@angular/common';

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
  ],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('myVideo') videoRef!: ElementRef<HTMLVideoElement>;

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

  events: any[];

  constructor() {
    this.events = [
      { index: 1, header: 'local_suppliers', icon: 'pi pi-arrow-down', image: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/farmer.png' },
      { index: 2, header: 'fresh_products', icon: 'pi pi-arrow-down', image: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/steak.png' },
      { index: 3, header: 'experienced_chefs', icon: 'pi pi-arrow-down', image: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/chef.png' },
      { index: 4 ,header: 'rich_taste', icon: 'pi pi-arrow-down', image: 'https://restaurant-web-page.s3.eu-north-1.amazonaws.com/cooked_steak.PNG'}
    ];
  }

}
