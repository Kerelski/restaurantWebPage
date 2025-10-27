import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {MenuPage} from './pages/menu-page/menu-page';

export const routes: Routes = [
    {
      path: '',
      component: HomePage,
    },
    {
      path: 'menu',
      component: MenuPage,
    }

];
