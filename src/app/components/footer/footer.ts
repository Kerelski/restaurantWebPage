import {Component, inject} from '@angular/core';
import {Divider} from 'primeng/divider';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-footer',
  imports: [
    Divider,
    NgOptimizedImage,
    TranslatePipe,
    Button
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  router = inject(Router);
}
