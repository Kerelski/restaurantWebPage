import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {MenuPage} from './pages/menu-page/menu-page';
import {GalleryPage} from './pages/gallery-page/gallery-page';
import {AboutUsPage} from './pages/about-us-page/about-us-page';

export const routes: Routes = [
    {
      path: '',
      component: HomePage,
    },
    {
      path: 'menu',
      component: MenuPage,
    },
    {
      path: 'gallery',
      component: GalleryPage,
    },
    {
      path: 'about_us',
      component: AboutUsPage,
    }
];
