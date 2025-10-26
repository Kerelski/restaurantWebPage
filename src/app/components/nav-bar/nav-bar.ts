import {Component, inject, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {Button} from 'primeng/button';
import {SplitButton} from 'primeng/splitbutton';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {Drawer} from 'primeng/drawer';
import {Divider} from 'primeng/divider';

@Component({
  selector: 'nav-bar',
  imports: [

    NgOptimizedImage,
    Button,
    SplitButton,
    TranslatePipe,
    Drawer,
    Divider
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit {
  private translate = inject(TranslateService);
  router = inject(Router);

  visible: boolean = false;
  items: MenuItem[] = [];

  currentLanguage = 'Polski';

  ngOnInit() {
    this.items = [
      {
        label: 'Polski',
        icon: 'fi fi-pl',
        command: () => this.setLanguage('pl')
      },
      {
        label: 'English',
        icon: 'fi fi-gb',
        command: () => this.setLanguage('en')
      }
    ];
  }

  setLanguage(lang: string) {
    if(lang === 'en') {
      this.currentLanguage = 'English';
    }else {
      this.currentLanguage = 'Polski';
    }
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  toggleDrawer(){
    this.visible = !this.visible;
  }
}
