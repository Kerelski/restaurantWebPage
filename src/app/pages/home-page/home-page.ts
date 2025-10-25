import { Component } from '@angular/core';
import {NavBar} from '../../components/nav-bar/nav-bar';
import {Card} from 'primeng/card';

@Component({
  selector: 'home-page',
  imports: [
    NavBar,
    Card
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
