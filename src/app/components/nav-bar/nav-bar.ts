import {Component, inject} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'nav-bar',
  imports: [

    NgOptimizedImage
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  router = inject(Router);

}
