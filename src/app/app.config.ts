import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import localEs from '@angular/common/locales/es-MX'
import {registerLocaleData} from '@angular/common'

registerLocaleData(localEs)

export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes,withHashLocation()),provideHttpClient(),provideAnimations()]
  providers: [provideRouter(routes),provideHttpClient(),provideAnimations()]
};
