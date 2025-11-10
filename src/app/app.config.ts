import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import {provideRouter, withInMemoryScrolling } from '@angular/router';
import AuraDark from '@primeuix/themes/aura'

import { routes } from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {provideTranslateHttpLoader} from '@ngx-translate/http-loader';
import { provideHttpClient} from '@angular/common/http';
import {provideTranslateService} from '@ngx-translate/core';
import {definePreset} from '@primeuix/themes';


const MyPreset = definePreset(AuraDark, {
  semantic: {
    primary: {
      50: '{red.100}',
      100: '{red.200}',
      200: '{red.400}',
      300: '{red.400}',
      400: '{red.500}',
      500: '{red.600}',
      600: '{red.700}',
      700: '{red.800}',
      800: '{red.900}',
      900: '{red.900}',
      950: '{red.950}'
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({
        scrollPositionRestoration: 'top'
      }
    )),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset
      }
    }),
    provideHttpClient(),
    provideTranslateService({
      lang: 'pl',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json'
      })
    }),
  ]
};
