import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ 
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled' 
    }))
  ]
};