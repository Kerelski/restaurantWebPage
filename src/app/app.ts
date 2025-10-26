import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('restaurantWebPage');

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|pl/) ? browserLang : 'pl');
  }
}
